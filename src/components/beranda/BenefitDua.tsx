import Information from '../../assets/img/information.svg';

export const BenefitDua = () => {
    return (
        <section id="banner-4">
            <div className="container">
                <div className="center">
                    <div className="grid-box-about">
                        <div>
                            <div className="title-section">
                                <h2 className="title-banner">Identitas dan data akan terjamin aman</h2>
                            </div>
                            <div className="description-section">
                                <p className="description-banner">Data pribadi akan aman dengan algoritma yang handal</p>
                            </div>
                        </div>
                        <div>
                            <div className="layout-img">
                                <img className="banner-4-img-size" src={Information} alt="Information" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}