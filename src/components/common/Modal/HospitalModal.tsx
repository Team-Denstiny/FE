import React from "react";
import { Modal } from "react-bootstrap";
import exitIcon from "../../../assets/exit.png";
import "./ReviewModal.css";

interface TimeData {
    day: string;           // 요일
    work_time: string[];    // 근무 시간 (배열 형태로 시작 시간, 종료 시간)
    break_time: string[];   // 휴식 시간 (배열 형태로 시작 시간, 종료 시간)
    description: string;    // 기타 설명
  }

interface TimeDataMap {
  [key: string]: TimeData;  // 요일이 키가 되는 객체. "월", "화", "수" 등.
}

interface SortingModalProps {
    options: TimeDataMap,
    select: (option: string) => void,
    isOpen: boolean,
    sort: string,
    today: string
}

const HospitalModal: React.FC<SortingModalProps> = ({ options, select, isOpen, sort, today}) => {

    return (
        <div className={`modal-overlay ${isOpen ? 'show' : ''}`} onClick={() => select("")}>
            <Modal 
                show={isOpen} 
                onHide={() => select('')} 
                backdrop={true} 
                dialogClassName="hospital-modal"
            >
                <div className="pl-6 pt-5 pr-6 pb-5">

                    <Modal.Body>
                        <div>
                            <div className="flex justify-between items-center">

                            <div 
                            key={0} 
                            className={`font-noto text-[16px] font-bold text-black cursor-pointer p-2 flex items-center gap-[202px] `} 
                            onClick={() => select("")}> 전체 진료 시간</div>

                            <img src={exitIcon} className="w-[14px] h-[14px] mr-2" />

                            

                            </div>
                                <div className="flex flex-wrap bg-blueWhite rounded-[20px] p-[15px] font-noto text-black text-[14px]">
                                    <div className="inline text-black w-[50%]">
                                        <b>오늘</b>
                                        <br />
                                        {options[today].work_time.join("-")}
                                    </div>
                                    <div className="inline text-black w-[50%]">
                                        <b> 휴게시간</b>
                                        <br />
                                        {options[today].break_time[0] === "00:00" ? "없음 ": options[today].break_time.join("-")}
                                    </div>
                                </div>
                                <br />
                            <div className="flex flex-wrap bg-gray rounded-[20px] p-[15px] font-noto text-black text-[14px]">
                            {
                                Object.entries(options).map(([day, timeData]) => (
                                    <div key={day} className="font w-[50%] pb-[10px]">
                                        {/* day와 timeData를 사용하여 원하는 내용 렌더링 */}
                                        <p className={`font-bold ${day === "일" ? 'text-red':''} ${day === "토" ? 'text-[#3189D6]' : ""}`}> 
                                            {day}요일
                                        </p>
                                        {
                                            timeData.description.length == 0 ?
                                                <p>{timeData.work_time[0] === "00:00" ? "휴무" : timeData.work_time.join(' - ')}</p>
                                                :
                                                <p>
                                                    {
                                                        timeData.description.split("(")[0]
                                                    }
                                                </p>
                                        }
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    </Modal.Body>

                </div>
               
            </Modal>
        </div>
    );
}

export default HospitalModal;
