import React from "react";
import { Modal } from "react-bootstrap";
import selectIcon from "../../../assets/search/select2.png";
import "./ReviewModal.css";

interface SortingModalProps {
    options: string[],
    select: (option: string) => void,
    isOpen: boolean,
    sort: string
}

const ReviewModal: React.FC<SortingModalProps> = ({ options, select, isOpen, sort  }) => {
    return (
        <div className={`modal-overlay ${isOpen ? 'show' : ''}`}>
            <Modal 
                show={isOpen} 
                onHide={() => select('')} 
                backdrop={false} 
                dialogClassName="review-modal"
            >
                <div className="pl-6 pt-5 pr-6">

                    <Modal.Body>
                        <div>
                            {options.map((option, index) => (
                                <div 
                                 key={index} 
                                 className={`font-noto font-regular text-[13px] text-black cursor-pointer p-2 flex items-center gap-[202px] `} 
                                 onClick={() => select(option)} 
                                 onMouseEnter={e => {
                                    e.currentTarget.style.fontWeight = 'bold';
                                    e.currentTarget.style.color = '#0047AD';
                                    e.currentTarget.style.backgroundColor = '#F2F2F2';

                                 }}
                                 onMouseLeave={e => {
                                    e.currentTarget.style.fontWeight = 'normal';
                                    e.currentTarget.style.color = 'black'
                                    e.currentTarget.style.backgroundColor = 'white';
                                }}
                                >
                                 {option}
                                </div>
                            ))}
                        </div>
                    </Modal.Body>

                </div>
               
            </Modal>
        </div>
    );
}

export default ReviewModal;
