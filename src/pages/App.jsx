import { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

const App = () => {

    const [dark, setDark] = useState(() => {
        return localStorage.getItem('dark') === 'true';
    });

    const [formData, setFormData] = useState({
        name : '',
        email : '',
        content : '',
    });

    const handleTheme = () => {
        setDark(prev => !prev);
    };

    const [state, handleSubmit] = useForm("mrpevwdl");

    useEffect(() => {
        localStorage.setItem('dark', JSON.stringify(dark));
        document.documentElement.classList.toggle('dark', dark);
    }, [dark]);

    return ( 
        <div className="bg-primary dark:bg-primary-dark min-h-screen dark:text-white px-[3%]">
            <div className="w-full flex justify-between items-center">
                <div className="ml-[7%] my-5 text-2xl font-bold">NK</div>
                <button className="mr-[7%] my-5" onClick={handleTheme}>
            <img 
                src={dark 
                ? "https://raw.githubusercontent.com/feathericons/feather/master/icons/sun.svg" 
                : "https://raw.githubusercontent.com/feathericons/feather/master/icons/moon.svg"
                } 
                alt={dark ? "Switch to Light Mode" : "Switch to Dark Mode"} 
                className="w-5 h-5 dark:invert"
            />
                </button>
            </div>

            <section id="about" className="flex flex-col mx-auto text-black dark:text-white items-center font-mono">
                <h1 className="font-bold text-[clamp(2rem,7vw,5rem)] my-3">Natnael Kedir</h1>
                <p className="w-[50%] text-center">18-year-old Full-Stack Developer & problem solver. Passionate about building performant web systems, algorithms, and competitive programming.</p>  
                <div className="flex flex-col sm:flex-row text-center w-[30%] justify-center gap-6 mt-5 mb-10">
                    <div><a href="https://linkedin.com/in/natnaelkedir" target="_blank" rel="noreferrer"><img className="w-6 h-6 dark:invert" src="https://raw.githubusercontent.com/feathericons/feather/master/icons/linkedin.svg" alt="LinkedIn" /></a></div>
                    <div><a href="https://x.com/natnaelkedir" target="_blank" rel="noreferrer"><img className="w-6 h-6 dark:invert" src="https://raw.githubusercontent.com/feathericons/feather/master/icons/twitter.svg" alt="Twitter" /></a></div>
                    <div><a href="https://github.com/natiked" target="_blank" rel="noreferrer"><img className="w-6 h-6 dark:invert" src="https://raw.githubusercontent.com/feathericons/feather/master/icons/github.svg" alt="Github" /></a></div>
                </div>              
            </section>

            <section id="projects" className="flex flex-col gap-5 items-center font-mono mt-7">
                <h2 className="underline underline-offset-8 decoration-1 decoration-black dark:decoration-white decoration-dashed mb-5 text-2xl font-bold">SELECTED PROJECTS</h2>
                <div className="mx-auto w-[60%] min-h-[250px] min-w-[350px] border rounded-2xl border-black dark:border-white bg-primary dark:bg-primary-dark dark:border-white flex flex-col items-center px-5 text-center py-5 gap-5">
                    <a className="text-2xl font-bold" href="https://chesslog-project.vercel.app/">ChessLog</a>
                    <p>Chess Game Analytics & Blunder Tracking SaaS. Visual telemetry for competitive players.</p>
                    <div className="flex sm:flex-row flex-col w-[50%] justify-center gap-5 mt-auto">
                        <button className="border border-black dark:border-white h-[30px] flex flex-col items-center justify-center px-4">REACT</button>
                        <button className="border border-black dark:border-white h-[30px] flex flex-col items-center justify-center px-4">Express</button>
                        <button className="border border-black dark:border-white h-[30px] flex flex-col items-center justify-center px-4">POSTGRESQL</button>
                    </div>
                </div>
                <div className="mx-auto w-[60%] min-h-[250px] min-w-[350px] border rounded-2xl border-black dark:border-white bg-primary dark:bg-primary-dark dark:border-white flex flex-col items-center px-5 text-center py-5 gap-5">
                    <a className="text-2xl font-bold" href="https://watch-o-sandy.vercel.app/">Watch-O</a>
                    <p>Fast minimalist website for discovering trending movies. Powered by TMDB caching it allows you to look up old and new movies.</p>
                    <div className="flex sm:flex-row flex-col w-[50%] justify-center gap-5 mt-auto">
                        <button className="border border-black dark:border-white h-[30px] flex flex-col items-center justify-center px-4">REACT</button>
                        <button className="border border-black dark:border-white h-[30px] flex flex-col items-center justify-center px-4">TAILWINDCSS</button>
                        <button className="border border-black dark:border-white h-[30px] flex flex-col items-center justify-center px-4">TMDB</button>
                    </div>
                </div>
            </section>

            <section id="experience" className="flex flex-col items-center mt-10 ">
                <h2 className="mb-5 text-2xl font-bold">Experience</h2>
                <div className="flex flex-wrap items-center justify-center gap-6 py-4">
                    <div>
                        <img className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-[1.2] transition-opacity" src="https://cdn.simpleicons.org/html5/71717a" alt="HTML Icon" />
                    </div>
                    <div>
                        <img className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-[1.2] transition-opacity" src="https://cdn.simpleicons.org/css/71717a" alt="CSS Icon" />
                    </div>
                    <div>
                        <img className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-[1.2] transition-opacity" src="https://cdn.simpleicons.org/javascript/71717a" alt="JS Icon" />
                    </div>
                    <div>
                        <img className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-[1.2] transition-opacity" src="https://cdn.simpleicons.org/tailwindcss/71717a" alt="TailwindCSS Icon" />
                    </div>
                    <div>
                        <img className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-[1.2] transition-opacity" src="https://cdn.simpleicons.org/nodedotjs/71717a" alt="Node.JS Icon" />
                    </div>
                    <div>
                        <img className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-[1.2] transition-opacity" src="https://cdn.simpleicons.org/express/71717a" alt="Express Icon" />
                    </div>
                    <div>
                        <img className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-[1.2] transition-opacity" src="https://cdn.simpleicons.org/postgresql/71717a" alt="PostgreSQL Icon" />
                    </div>
                    <div>
                        <img className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-[1.2] transition-opacity" src="https://cdn.simpleicons.org/postman/71717a" alt="Postman Icon" />
                    </div>
                    <div>
                        <img className="w-10 h-10 opacity-80 hover:opacity-100 hover:scale-[1.2] transition-opacity" src="https://cdn.simpleicons.org/python/71717a" alt="Python Icon" />
                    </div>
                </div>
            </section>

            <section className="flex justify-center flex-col items-center mt-10 pb-5">
                <h2 className="mb-5 text-2xl font-bold">Contact me</h2>
                { state.succeeded ? (
                        <p>Message submitted successfully !</p> ) : (
                        <form className="flex w-[50%] flex-col gap-5 px-10 py-5 min-w-[350px]" onSubmit={handleSubmit}>
                            <input required name="name" className="indent-3 focus:outline-none" type="text" value={formData.name} placeholder="John Doe" onChange={(e) => {setFormData({...formData,name:e.target.value})}}/>
                            <ValidationError prefix="name" field="name" errors={state.errors}/>
                            <input required name="email" className="indent-3 focus:outline-none" type="email" value={formData.email} placeholder="email@example.com" onChange={(e) => {setFormData({...formData, email:e.target.value})}}/>
                            <ValidationError prefix="email" field="email" errors={state.errors}/>
                            <textarea required name="content" className="min-h-[75px] indent-3 focus:outline-none" type="text" value={formData.content} placeholder="Your message" onChange={(e) => {setFormData({...formData, content:e.target.value})}}> </textarea>
                            <ValidationError prefix="content" field="content" errors={state.errors}/>
                            <button className="w-[100px] mx-auto h-9 border bg-primary-dark dark:bg-primary text-primary dark:text-primary-dark border-primary dark:border-primary-dark rounded-[5px] hover:scale-[1.1] transition ease-out" 
                                type="submit"
                                disabled={state.submitting}
                            >{state.submitting ? 'Sending' : 'Submit'}</button>
                        </form>
                    )
                }
            </section>

        </div>
     );
}
 
export { App };