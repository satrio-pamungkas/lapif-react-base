import Work from '../../assets/img/work.svg';

export const BenefitSatu = () => {
    return (
        <section id="banner-3">
            <div className="container">
                <div className="center">
                    <div className=" grid-box-about">
                        <div>
                            <div className="layout-img">
                                <img className="banner-3-img-size" src={Work} alt="Work"/>
                            </div>
                        </div>
                        <div>
                            <div className="title-section">
                                <h2 className="title-banner">Kami akan siap membantu mereka</h2>
                            </div>
                            <div className="description-section">
                                <p className="description-banner">Kami akan membantu dalam meneruskan aspirasi dan informasi
                                    serta forum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}