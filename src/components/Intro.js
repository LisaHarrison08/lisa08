import { Fade } from 'react-reveal';

export const Intro = () => {
    
    return (
        <div >
            <div className='d-flex justify-content-center align-content-center' style={{maxWidth: '95%', height: '87vh', margin: 'auto'}}>
                <div className='border-0 align-self-center p-auto'>
                    <Fade left duration={2000} distance="300px">
                        <h2 className='intro-text'>Lisa Harrison</h2>
                    </Fade>
                    <Fade right duration={2000} distance="300px">
                        <h2 className='mt-0 sub-text '>Portfolio</h2>
                    </Fade>
                    <Fade left duration={2000} distance="300px">
                        <p className='mt-0 text'>
                        Creating and building beautiful, responsive intuitive designs.<br/>
                        </p>
                    </Fade>
                </div>
            </div>
        </div>   
    )
}

