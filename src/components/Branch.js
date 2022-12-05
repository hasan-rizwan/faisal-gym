import { useParams } from 'react-router-dom'
import "./styles/branch.css"

const Branch = () => {
    const data = {
        1: {
            branchPhotoClass: 'branch-nazimabadBlk1',
            branchName: 'Nazimabad Block 1',
            maleTime: '7AM - 10AM and 4PM - 1AM',
            femaleTime: '11AM - 4PM',
            admission: '500rs',
            monthly: '1200rs',
            map: [<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7237.487340404206!2d67.01909467577931!3d24.90672363616462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f4d29746e2d%3A0x9dcbf595d16e938c!2sFaisal&#39;s%20Gym!5e0!3m2!1sen!2s!4v1669572155400!5m2!1sen!2s" className='map' title='branch' allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>]
        },
        2: {
            branchPhotoClass: 'branch-nazimabadblk5',
            branchName: 'Nazimabad Block 5',
            maleTime: '6AM - 10AM and 5PM - 1AM',
            femaleTime: '10AM - 5PM',
            admission: '500rs',
            monthly: '1000rs',
            map: [<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57899.900688315196!2d66.98845254281171!3d24.906719448216165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f015c2080b7%3A0x8273a101823d7fb6!2sFaisal%20Fitness%20Zone!5e0!3m2!1sen!2s!4v1669615834776!5m2!1sen!2s" className='map' title='branch' allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>]
        },
        3: {
            branchPhotoClass: 'branch-NorthKarachi',
            branchName: 'North Karachi Sector 11-I',
            maleTime: '8AM - 10AM and 5PM - 1AM',
            femaleTime: '10AM - 5PM',
            admission: '500rs',
            monthly: '1200rs',
            map: [<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57868.82705310187!2d67.00409106134413!3d24.972860853492012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34122fc003fa3%3A0xcafb34f664482b5!2sFaisal&#39;s%20gym!5e0!3m2!1sen!2s!4v1669616073569!5m2!1sen!2s" className='map' title='branch' allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>]
        },
        4: {
            branchPhotoClass: 'branch-gulzarEHijri',
            branchName: 'Gulzar-e-Hijri Block 2',
            maleTime: '7AM - 10AM and 5PM - 1AM',
            femaleTime: '10AM - 5PM',
            admission: '500rs',
            monthly: '1500rs',
            map: [<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57880.42668425644!2d67.03419645820313!3d24.948189799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339924818a32d%3A0x73f3ad9ab8fc5ac5!2sFaisal&#39;s%20Gym!5e0!3m2!1sen!2s!4v1669615910426!5m2!1sen!2s" className='map' title='branch' allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>]
        },
        5: {
            branchPhotoClass: 'branch-asphani',
            branchName: 'Abul Hasan Isphahani Rd',
            maleTime: '7AM - 10AM and 4PM - 1AM',
            femaleTime: 'Not for females',
            admission: '800rs',
            monthly: '1200rs',
            map: [<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6673.659402159838!2d67.09656093980306!3d24.936157749891894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338ade90c63e3%3A0x2f40f705094dce98!2sFaisal&#39;s%20Gym!5e0!3m2!1sen!2s!4v1669615996242!5m2!1sen!2s" className='map' title='branch' allowFullScreen="" loading="eager" referrerPolicy="no-referrer-when-downgrade"></iframe>]
        }
    }

    // Logic to automate branch details
    const { id } = useParams();
    const branch = data[id];
    return (
        <section className="branch-section" id='branch'>
            <div className="container">
                <div className="section-data">
                    <h2 className="section-subtitle">Details</h2>
                </div>
                <article className='branch-card'>
                    <div className={branch.branchPhotoClass}>
                        <div className="branch-photo-bg">
                            <h2 className="branch-title">{branch.branchName}</h2>
                        </div>
                    </div>
                    <div className="branch-details">
                        <h2 className="details-title">Day & Time</h2>
                        <p>(Sunday Off)</p>
                        <p><span>Male:</span> {branch.maleTime}</p>
                        <p><span>Female:</span> {branch.femaleTime}</p>
                        <h2 className="details-title">Admission & Monthly Fee</h2>
                        <p><span>Admission:</span> {branch.admission}</p>
                        <p><span>Monthly:</span> {branch.monthly}</p>
                        <h2 className="details-title">Contact Info</h2>
                        <p><span>Phone/Whatsapp:</span> <a href='tel:+92 321 2179202'>+92 321 2179202</a></p>
                    </div>
                </article>
                {branch.map}
            </div>
        </section>
    )
}

export default Branch