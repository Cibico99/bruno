import styled from 'styled-components';

const StyledWrapper = styled.div`
  &.dragging {
    cursor: row-resize;
  }

  div.drag-request {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10px;
    padding: 0;
    cursor: row-resize;
    background: transparent;

    div.drag-request-border {
      display: flex;
      width: 100%;
      height: 1px;
      border-top: solid 1px ${(props) => props.theme.requestTabPanel.dragbar.border};
    }

    &:hover div.drag-request-border {
      border-top: solid 1px ${(props) => props.theme.requestTabPanel.dragbar.activeBorder};
    }
  }

  div.graphql-docs-explorer-container {
    background: white;
    outline: none;
    box-shadow: rgb(0 0 0 / 15%) 0px 0px 8px;
    position: absolute;
    right: 0px;
    z-index: 2000;
    width: 350px;
    height: 100%;

    div.doc-explorer-title {
      text-align: left;
    }

    div.doc-explorer-rhs {
      display: flex;
    }
  }
`;

export default StyledWrapper;
