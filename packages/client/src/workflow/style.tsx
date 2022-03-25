import { css } from '@emotion/css';

export const workflowPageClass = css`
  height: 100%;
  width: 100%;
  overflow: auto;

  .workflow-canvas{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
  }
`;

export const branchBlockClass = css`
  display: flex;
  position: relative;

  :before{
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(50% - .5px);
    width: 1px;
    background-color: #f0f2f5;
  }
`;

export const branchClass = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 0 2em;

  .workflow-node-list{
    flex-grow: 1;
    min-width: 20em;
  }

  .workflow-branch-lines{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #ddd;
  }

  :before,:after{
    content: "";
    position: absolute;
    height: 1px;
    background-color: #ddd;
  }

  :before{
    top: 0;
  }

  :after{
    bottom: 0;
  }

  :not(:first-child):not(:last-child){
    :before,:after{
      left: 0;
      width: 100%;
    }
  }

  :last-child:not(:first-child){
    :before,:after{
      right: 50%;
      width: 50%;
    }
  }

  :first-child:not(:last-child){
    :before,:after{
      left: 50%;
      width: 50%;
    }
  }
`;

export const nodeBlockClass = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const nodeClass = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const nodeCardClass = css`
  width: 20em;
  background: #fff;
  padding: 1em;
  box-shadow: 0 .25em .5em rgba(0, 0, 0, .1);
`;

export const nodeHeaderClass = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const nodeTitleClass = css`
  font-weight: normal;

  .workflow-node-id{
    color: #999;
  }
`;

export const nodeSubtreeClass = css`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

`;

export const addButtonClass = css`
  flex-shrink: 0;
  padding: 2em 0;
`;
