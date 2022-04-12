export const Chatbox = () => {
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
                                        <li className="our-chat">
                                            <span className="our-msg">Haosfjos fsss</span>
                                        </li>
                                        <li className="response-chat">
                                            <span className="response-msg">Halssss</span>
                                        </li>
                                        <li className="our-chat">
                                            <span className="our-msg">Hal ohal ha l oasjsf sfj osfosjf ofjsff sssssssssss</span>
                                        </li>
                                        <li className="response-chat">
                                            <span className="response-msg">Hal ohal ha l oasjsf sfj osfosjf ofjs fosfjos fosjfo safffffff sssssssssss</span>
                                        </li>
                                        <li className="our-chat">
                                            <span className="our-msg">Hal ohal ha l oasjsf sfj osfosjf ofjs fosfjos fosjfo safffffff sssssssssss</span>
                                        </li>
                                        <li className="response-chat">
                                            <span className="response-msg">Hal ohal ha l oasjsf sfj osfosjf ofjs fosfjos fosjfo safffffff sssssssssss</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="input-section">
                                    <input type="text" placeholder="Ketik Pesan"
                                        className="input-box"
                                        name="message" required />
                                    <button type="submit" className="btn-send">
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