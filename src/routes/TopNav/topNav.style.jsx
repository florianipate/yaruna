import styled from 'styled-components';

export const NavigationContainer = styled.div` 
    min-height:0;
    width: 100%;
    // display: flex;
    // justify-content: space-between;
    margin-bottom: 25px;
    border-bottom:1px solid #ececec;`

export const TopEsentials = styled.div`
    width:100%;
    display: flex;
    justify-content: flex-end;`

export const LinksContainer = styled.ul`
    display:flex;
    justify-content: flex-end;`

export const LinkItem = styled.li`
    display: inline;
    // min-width: 100px;
    border-block-end-style: none;
    margin-right:20px;
    line-height: 27px;
    font-size: 12px;
    padding 5px 0;
    & svg {
        transform: scale(0.75);
        vertical-align: middle;
        display: inline-block;
        margin-right: 12px;
    }`
    