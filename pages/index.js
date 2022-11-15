import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {

    const estiloHomePage = { 
        // backgroundColor: "red" 
    };

    return (
        <>
            <CSSReset />
            <div style={estiloHomePage}>
                <Menu />
                <Header />
                <TimeLine playList={config.playlists}>
                </TimeLine>
            </div>
        </>
    );
}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
function Header() {
    return (
        <StyledHeader>
            <section className="user-info">
                <img src={`https://github.com/${config.githubAdm}.png`} alt="banner" />

                <div>
                    <h2>
                        {config.nameAdm}
                    </h2>
                    <p>
                        {config.jobAdm}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
}

function TimeLine(props) {
    // console.log(props);
    const playlistNames = Object.keys(props.playList)

    return (
        <StyledTimeline>
            {playlistNames.map((nomeAtual) => {
                const videos = props.playList[nomeAtual];
                // console.log("plNames", playlistNames);
                // console.log("nomeAtual", nomeAtual);
                // console.log("Videos", videos);
                return (
                    <section>
                        <h2>{nomeAtual}</h2>
                        <div>
                            {videos.map((video) => { return (
                                <a href={video.url}>
                                    <img src={video.thumb}/>
                                    <span>
                                        {video.title}
                                    </span>
                                </a>
                            )})}
                        </div>
                    </section>
                );
            })}
        </StyledTimeline>
    )
}