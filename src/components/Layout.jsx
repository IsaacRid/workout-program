export default function Layout(props) {

    const { children } = props

    const header = (
        <header>
            <h1 className="text-gradient">Workout Program</h1>
            <p><strong>The 30 simple workouts program</strong></p>
        </header>
    )

    return (
        <>
            {header}
            {children}
        </>
    )
}