import styled from 'styled-components';

export const NavigationContainer = styled.div` 
    min-height:0;
    width: 100%;
    position: fixed;
    background-color:#fff;
    top:0;
    left:0;
    z-index:1000;
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
export const DropdownArrow = styled.b`
    margin-top:-3px;
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;`
    