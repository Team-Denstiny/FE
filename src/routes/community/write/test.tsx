import React, { useCallback, useState } from 'react';
import axios from 'axios';
import camera from '../../../assets/camera.png';

const DragAndDropUpload: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]); // 여러 파일을 저장하는 상태
  const [error, setError] = useState<string | null>(null);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]); // 이미지 미리보기 상태

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // 기본 동작 방지
    const droppedFiles = event.dataTransfer.files; // 드롭된 파일 가져오기
    const newFiles: File[] = [];
    const newPreviews: string[] = [];

    for (let i = 0; i < droppedFiles.length; i++) {
      if (newFiles.length < 10) { // 최대 10개까지 추가
        newFiles.push(droppedFiles[i]);
        newPreviews.push(URL.createObjectURL(droppedFiles[i])); // 미리보기 URL 생성
      }
    }

    if (files.length + newFiles.length > 10) {
      setError('최대 10개까지 이미지를 업로드할 수 있습니다.');
      return;
    }

    setFiles((prev) => [...prev, ...newFiles]);
    setImagePreviews((prev) => [...prev, ...newPreviews]);
    setError(null); // 에러 초기화
  }, [files]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // 기본 동작 방지
  };

  const handleUpload = async () => {
    if (files.length === 0) {
      setError('파일을 선택해 주세요.');
      return;
    }

    const formData = new FormData();
    files.forEach(file => {
      formData.append('images', file);
    });

    try {
      const response = await axios.post('YOUR_API_ENDPOINT', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('파일 업로드 성공:', response.data);
      // 미리보기 URL 해제
      imagePreviews.forEach(preview => URL.revokeObjectURL(preview));
      setFiles([]); // 업로드 후 파일 초기화
      setImagePreviews([]); // 미리보기 초기화
    } catch (err) {
      console.error('업로드 중 에러 발생:', err);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="border-2 border-dashed border-fontGray rounded-lg p-6 mb-4"
      >
        <div className='flex justify-center items-center'>
            <img src={camera} />
        </div>
        <br />
        <p className="text-fontGray">파일을 드래그하여 업로드하세요. </p>
        <p className="text-fontGray">{files.length}/10</p>
        {error && <p className="text-red text-[14px] font-bold">{error}</p>}
      </div>
      <div className="flex overflow-x-auto mb-4 space-x-4"> {/* horizontal scroll */}
        {imagePreviews.map((preview, index) => (
          <img key={index} src={preview} alt={`미리보기 ${index}`} className="w-24 h-auto border rounded" />
        ))}
      </div>
    </div>
  );
};

export default DragAndDropUpload;
