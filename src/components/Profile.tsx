export const Profile = () => {
    return (
        <div className='container'>
            <h2>By Andrés Cardona Álvarez</h2> 
            <hr/>
            <h4>GitHub client: <small><a href="https://github.com/webacamate/calendar-exam">https://github.com/webacamate/calendar-exam</a></small> </h4>
            <h4>GitHub Server: <small><a href="https://github.com/webacamate/calenadar-exam-server">https://github.com/webacamate/calenadar-exam-server</a></small> </h4>
            <h4>GitHub Page: <small><a href="https://webacamate.github.io/calendar-exam/">https://webacamate.github.io/calendar-exam/</a></small>  </h4>
            <h4>Docker: <small><a href="https://hub.docker.com/r/acamate/calendar-exam">https://hub.docker.com/r/acamate/calendar-exam</a></small></h4>
            <p>docker pull acamate/calendar-exam </p>
            <p>docker run -p 3000:3000 acamate/calendar-exam </p>
        </div>
    )
}
