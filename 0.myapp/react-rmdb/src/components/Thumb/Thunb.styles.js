import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.3s;
    border-radius: 20px;

    :hover{
        opacity: 0.8
    }

    @animates animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
