import { v4 as uuidv4 } from 'uuid';
import { useFetch } from '../../api/useFetch';
import { useRef, useState, useEffect } from 'react';

const chatList: any = [];

const style = [
    {
        li: "our-chat",
        span: "our-msg"
    },
    {
        li: "response-chat",
        span: "response-msg"
    }
];

export const Chatbox = () => {
    const [userMessage, setUserMessage] = useState('');
    const [realMessage, setRealMessage] = useState('intro');
    const [listMessage, setListMessage] = useState(chatList);
    const { value } = useFetch(realMessage);
    const scrollRef: any = useRef(null);

    const handleChange = (e: any) => {
        setUserMessage(e.target.value);
    };

    const handleSubmit = () => {
        if (userMessage === realMessage) {
            // To make changes and trigger hooks
            setRealMessage(userMessage + " ");
        } else {
            setRealMessage(userMessage);
        }

        const newList = listMessage.concat({
            id: uuidv4(),
            message: userMessage,
            li: style[0].li,
            span: style[0].span
        });

        setListMessage(newList);
        setUserMessage('');
    };

    useEffect(() => {
        const item: string = value.toString();
        const data: any = item.split('/');
        const newList = listMessage.concat({
            id: uuidv4(),
            message: data[1],
            li: style[1].li,
            span: style[1].span
        });

        setListMessage(newList);
    }, [value]);

    useEffect(() => {
        scrollRef.current.scrollIntoView({ 
            block: "nearest",
            inline: "center",
            behavior: "smooth",
            alignToTop: false
        });
    }, [listMessage]);

    return (
        <section id="chat-section">
            <div className="container">
                <div className="center">
                    <div className="grid-box-chat">
                        <div>
                            <div className="title-section">
                                <h2 className="title-banner">Chatbot Penyuluhan</h2>
                            </div>
                            <div className="description-section">
                                <p className="description-banner">Silakan bertanya berkaitan dengan Narkoba pada chatbot kami</p>
                            </div>
                        </div>
                        <div className="chatbot">
                            <div className="box">
                                <div className="container">
                                    <ul>
                                        {listMessage.map((item: any) => (
                                            <li key={item.id} className={item.li}>
                                                <span className={item.span}>{item.message}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div ref={scrollRef}></div>
                                </div>
                                <div className="input-section">
                                    <input type="text" placeholder="Ketik Pesan"
                                        value={userMessage}
                                        onChange={handleChange}
                                        className="input-box"
                                        name="message" required />
                                    <button type="submit" className="btn-send" onClick={handleSubmit}>
                                        KIRIM
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}