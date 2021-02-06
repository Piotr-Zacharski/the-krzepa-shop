import styled from 'styled-components';

const StyledFooter = styled.div`
    position: fixed;
    bottom: 0;
    padding: 7px;
    color: white;
    background-color: rgb(41, 50, 60);
    min-height: 3vh;
    width: 100%;
    text-align: center;

    span {
        color: crimson;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <p>Copyright <span>&copy;</span> 2021 <span>phz</span></p>
        </StyledFooter>
    );
}
export default Footer;