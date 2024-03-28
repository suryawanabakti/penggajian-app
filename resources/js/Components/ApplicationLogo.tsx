export default function ApplicationLogo({ width, className = "" }: any) {
    return (
        <img
            src="/static/logo-unitama.png"
            width={width}
            className={className}
            alt="UNITAMA"
        />
    );
}
