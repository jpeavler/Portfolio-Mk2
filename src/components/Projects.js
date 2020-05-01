import React from 'react';
import NavBar from './NavBar';

const Projects = () =>{
    return(
        <>
            <NavBar/>
            <h2>Projects</h2>
            <div className="projects">
                <div className='project'>
                    <h4>Game Collection</h4>
                    <a href="https://game-collection-jpeavler2.herokuapp.com/">Deployed Project Link</a>
                    <a href="https://github.com/jpeavler/video-games-api">Github Link</a>
                    <img src="/assets/gameCollectionProject.png" alt="Game Collection Project" width="500px"/> {/*TODO: Transfer width to CSS */}
                    <p>
                    A website that allows users to view, create, edit, or delete descriptions of games in a game collection. The Video Games tab is
                    the only functional page as I plan to add additional game collections in the future.
                    </p>
                </div>
                <div className='project'>
                    <h4>Project 2</h4>
                </div>
                <div className='project'>
                    <h4>Project 3</h4>
                </div>
                <div className='project'>
                    <h4>Project 4</h4>
                </div>
            </div>
        </>
    )
}

export default Projects;