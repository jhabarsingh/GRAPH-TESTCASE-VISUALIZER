import img from './404.png';

export default function NotFound() {
    return(
        <img
            src={img}
            style={{
                width: "100vw",
                height: "100vh"
            }}
        />
    )
}