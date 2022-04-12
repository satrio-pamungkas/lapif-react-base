import Next from '../../assets/img/slider-next.svg';
import Previous from '../../assets/img/slider-back.svg';
import Smile from '../../assets/img/smile.svg';
import Testimony from '../../assets/img/testimony-photo.png';

export const Testimonial = () => {
    return (
        <section id="banner-5">
            <div className="container">
                <div className="center">
                    <div className="title-section title-banner-5">
                        <h1>Testimonial</h1>
                    </div>
                    <div className="description-banner-5">
                        <p>Testimoni resmi untuk <b>LAPIF, </b>sebagian besar berasal dari mahasiswa</p>
                    </div>
                    <div className="row">
                        <div className="slider-next-back">
                            <img src={Previous} alt="slider back" />
                        </div>
                        <div className="testimonial mx-auto">
                            <p className="center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident omnis
                                nihil
                                molestiae, dolorum voluptate quo, consequatur facere aut expedita porro debitis ratione eius
                                sequi
                                iusto, corrupti autem eum quia ipsum!</p>
                            <div className="testimonial-line"></div>
                            <div className="testimonial-profile">
                                <div className="testimonial-nama">
                                    <img className="testimonial-photo" src={Testimony} alt="testimoni photo" />
                                    <div className="testimonial-info">
                                        <h5>Muhammad Raihan Satrio</h5>
                                        <p>Software Engineer</p>
                                    </div>
                                </div>
                                <div className="row testimonial-react">
                                    <img className="testimonial-react-icon" src={Smile} alt="smile.svg" />
                                    <span>
                                        Recommended</span>
                                </div>
                            </div>
                        </div>
                        <div className="slider-next-back">
                            <img src={Next} alt="slider back" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}