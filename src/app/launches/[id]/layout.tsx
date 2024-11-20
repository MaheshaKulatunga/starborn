export default function LaunchLayout( {
    children,
}: {
    children: React.ReactNode;
}) {
    return (
    <div>
        {children}
        <div>
            <h2>Featured Launch Section</h2>
        </div>
    </div>
    )
}