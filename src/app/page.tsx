'use client';

// styled-components
import styled from 'styled-components';

const StyledHomeRoot = styled.div`
    width: 100%;
    height: 100%;

    overflow: auto;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    > .title {
        color: #ff1493;
        font-size: 48px;
        line-height: 72px;
        font-weight: 700;

        background-color: ${({ theme }) => theme.colors['brown-500']};
    }

    > .wrapper {
        flex: 1;
        width: 100%;
        height: 100%;

        overflow: auto;

        > .box1 {
            width: 500px;
            height: 100%;

            color: ${({ theme }) => theme.designSystemColors.primary};
            background-color: ${({ theme }) => theme.colors['deep-orange-a700']};

            display: flex;
            justify-content: center;
            align-items: flex-end;

            font-size: 40px;
            text-align: end;
            font-weight: 700;
        }
        > .box2 {
            margin-top: 20px;
            width: 500px;
            height: 100%;

            background-color: #006400;

            display: flex;
            justify-content: center;
            align-items: flex-end;

            font-size: 40px;
            text-align: end;
            font-weight: 700;
        }
    }
`;

function Home() {
    return (
        <StyledHomeRoot>
            <div className="title">
                Home
            </div>

            <div className="wrapper">
                <div className="box1">
                    Box1
                </div>
                <div className="box2">
                    Box2
                </div>
            </div>
        </StyledHomeRoot>
    );
}

export default Home;
