export const authEndpoint=
"https://accounts.spotify.com/authorize";

const redirectUri="http://localhost:3000/"


const clientId="85088302987f48c9bc535a93cb34c617";

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];
//pulling the accesstoken
export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts=item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial;

    },{});

}


export const loginUrl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

