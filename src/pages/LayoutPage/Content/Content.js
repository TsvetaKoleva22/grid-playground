import classnames from 'classnames'
import './Content.scss';

const Content = ({ classes }) => {
    return (
        <main className={classnames("content", classes)}>
            <div className="content__container">
                <div className="content__article">
                    <h2>Lorem, ipsum dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam ullam at optio totam ab est ratione, sed, illo doloremque dignissimos vero voluptatum dolore corporis sequi sit perferendis, ea exercitationem ipsa officiis inventore tenetur assumenda! Consequuntur accusantium quibusdam molestias nam, veritatis labore possimus eos, nobis alias consequatur vel!sit amet consectetur, adipisicing elit. Eligendi corrupti sit ipsum totam perspiciatis laudantium sequi officiis eveniet error minus.</p>
                </div>
                <div className="content__article">
                    <h2>Sit excepturi adipisicing</h2>
                    <p>Itaque, ab dolor? Quis architecto non obcaecati earum optio ipsum, magni voluptate repudiandae neque consequatur, quibusdam doloremque in libero maiores. Aconsectetur adipisicing elit. Optio Laboriosam ullam at optio totam ab est ratione, sed, illo doloremque dignissimos vero voluptatum dolore corporis possimus eos, nobis alias consequatur vel!sit amet consectetur.
                    </p>
                </div>
                <div className="content__article">
                    <h2>Aconsectetur tempo</h2>
                    <p>Nisi velit laborum, sequi sit perferendis, ea exercitationem ipsa officiis inventore tenetur assumenda! Consequuntur accusantium quibusdam molestias nam, veritatis labore! Quis architecto non obcaecati earum optio ipsum, magni voluptate repudiandae neque consequatur, quibusdam doloremque in libero maiores. Aconsectetur adipisicing elit. Laboriosam ullam at optio totam ab est ratione, sed, illo doloremque dignissimos vero voluptatum dolore corporis</p>
                </div>
            </div>
        </main>
    )
};

export default Content;