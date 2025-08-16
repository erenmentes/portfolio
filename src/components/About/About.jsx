import './About.css'
import fetchLanyardApi from '../../Api/LanyardAPI'
import { useEffect, useState } from 'react'


const About = () => {

  const [discordStatus, setDiscordStatus] = useState('');
  const [discordStatusToText, setDiscordStatusToText] = useState('');
  const [spotifyStatus, setSpotifyStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchLanyardApi();
      if (result && result.data) {
        setDiscordStatus(result.data.discord_status);
      } else {
        console.warn("something went wrong while fetching lanyard data.");
      }
    };
    fetchData();
  }, [discordStatus]);

  useEffect(() => {
    switch (discordStatus) {
      case 'online':
        setDiscordStatusToText('online')
        break;
      case 'dnd':
        setDiscordStatusToText('do not disturb.')
        break;
      case 'idle':
        setDiscordStatusToText('idle')
        break;
      case 'offline':
        setDiscordStatusToText('offline')
        break;
      default:
        setDiscordStatusToText('loading discord status.');
    }
  }, [discordStatus])

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchLanyardApi();
      if(result && result.data) {
        if(result.data.listening_to_spotify){
          setSpotifyStatus(result.data.spotify);
        } else {
          setSpotifyStatus(false);
        };
      } else {
        console.warn("something went wrong while fetching lanyard data.");
      };
    };
    fetchData();
  }, []);

  return (
    <div className='about'>
      <div className="description">
        <p><span className='title'>Junior developer</span> with a passion for <span className='lol'>building things nobody asked for</span>. When I'm not coding, you can find me playing games, watching anime or listening music.</p>
        <div className="status">
          <div className="discord">
            <svg className="svg-inline--fa fa-discord text-catppuccin-blue" width={15} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="discord" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path></svg>
            <p className='discordText'> discord ( {discordStatusToText} )</p>
          </div>
          <div className="spotify">
            <svg className="svg-inline--fa fa-spotify text-catppuccin-subtle" width={15} aria-hidden="true" focusable="false" data-prefix="fab" data-icon="spotify" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"></path></svg>
            <div className='spotifyText'>
              {spotifyStatus ? <p>listening <span className='songName'>{spotifyStatus.song}</span> from {spotifyStatus.artist}.</p> : <p>not listening to spotify.</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="uses">
        <h4 className='usesTitle'>uses /</h4>
        <div className="usesItems">
          <img src="https://skillicons.dev/icons?i=linux" width={48} className='usesItem' alt='icon' />
          <img src="https://skillicons.dev/icons?i=git" width={48} className='usesItem' alt='icon' />
          <img src="https://skillicons.dev/icons?i=github" width={48} className='usesItem' alt='icon' />
          <img src="https://skillicons.dev/icons?i=javascript" width={48} className='usesItem' alt='icon' />
          <img src="https://skillicons.dev/icons?i=vue" width={48} className='usesItem' alt='icon' />
          <img src="https://skillicons.dev/icons?i=react" width={48} className='usesItem' alt='icon' />
          <img src="https://skillicons.dev/icons?i=css" width={48} className='usesItem' alt='icon' />
          <img src="https://skillicons.dev/icons?i=rust" width={48} className='usesItem' alt='icon' />
          <img src="https://skillicons.dev/icons?i=nodejs" width={48} className='usesItem' alt='icon' />
          <img src="https://skillicons.dev/icons?i=expressjs" width={48} className='usesItem' alt='icon' />

        </div>
      </div>
    </div>
  )
}

export default About