import FiturSatu from '../../assets/img/fitur-1.svg';
import FiturDua from '../../assets/img/fitur-2.svg';
import FiturTiga from '../../assets/img/fitur-3.svg';

export const WelcomeHeader = () => {
    return (
        <section id="banner-1">
            <div className="banner-1-bgshadow">
                <div className="container">
                    <h1 className="banner-1-title">Selamat Datang di<br/>LAPIF</h1>
                    <div className="banner-1-layout-desc">
                        <span className="banner-1-desc">Layanan Aspirasi Pengaduan Informasi dan Forum</span>
                    </div>
                    <div className="center">
                        <div className="banner-1-grid-box-fitur">
                            <div>
                                <div className="banner-1-fiturImage">
                                    <img src={FiturSatu} alt="Fitur-1"/>
                                </div>
                                <span>LAYANAN PELAPORAN DAN ASPIRASI KAMI TELAH BERBASIS DIGITAL</span>
                            </div>
                            <div>
                                <div className="banner-1-fiturImage">
                                    <img src={FiturDua} alt="Fitur-2"/>
                                </div>
                                <span>LAPORAN DAN ASPIRASI YANG DIBERIKAN AKAN TEPAT SASARAN PADA YANG DITUJU</span>
                            </div>
                            <div>
                                <div className="banner-1-fiturImage">
                                    <img src={FiturTiga} alt="Fitur-3"/>
                                </div>
                                <span>TIDAK PERLU AKUN, SELURUH LAYANAN PELAPORAN DAN FORUM DAPAT DIAKSES</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}