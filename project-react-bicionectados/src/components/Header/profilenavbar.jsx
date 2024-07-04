import "./Header.css"

export default function ProfileNavBar({name,status}){
    return(
        <div className="profile-navbar">
            <img src="https://th.bing.com/th/id/OIP.90J8DhjWP4iox25fbgoY_AHaEK?rs=1&pid=ImgDetMain" alt="mono con cigarro" />
            <div className="profile-info">
            <strong>{name}</strong>
            <span>{status}</span>
            </div>
        </div>
    );
}
