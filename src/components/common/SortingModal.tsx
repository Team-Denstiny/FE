import React from "react";
import { Modal } from "react-bootstrap";
import selectIcon from "../../assets/search/select2.png"
import "./SortingModal.css"

interface SortingModalProps {
    options: string[],
    select: (option: string) => void,
    isOpen: boolean,
    sort: string
}

const SortingModal: React.FC<SortingModalProps> = ({ options, select, isOpen, sort  }) => {
    return (
        <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
            <Modal 
                show={isOpen} 
                onHide={() => select('')} 
                backdrop={false} 
                dialogClassName="custom-modal"
            >
                <div className="pl-6 pt-5 ">
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <div className='font-noto font-semibold text-[13px] text-black'>정렬 기준을 선택하세요</div>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div>
                            {options.map((option, index) => (
                                <div 
                                 key={index} 
                                 className={`font-noto font-regular text-[13px] text-black cursor-pointer p-2 flex items-center gap-[202px] ${option === sort ? 'text-blue font-semibold' : ''} `} 
                                 onClick={() => select(option)} 
                                >
                                 {option}
                                 {option === sort && (
                                     <img src={selectIcon}/>
                                 )}
                                </div>
                            ))}
                        </div>
                    </Modal.Body>

                </div>
               
            </Modal>
        </div>
    );
}

export default SortingModal;
