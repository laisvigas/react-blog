function About(props) {
    return (
            <Container className="flex-grow-1">
                <h2 className="about">{props.children}</h2>
            </Container>
    )
}
export default About;