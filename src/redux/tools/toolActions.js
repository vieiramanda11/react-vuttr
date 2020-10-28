import { ADD_TOOL, REMOVE_TOOL } from './toolTypes';

export const addTool = (tool) => {
    return {
        type: ADD_TOOL,
        payload: tool
    }
}

export const removeTool = (tool) => {
    return {
        type: REMOVE_TOOL,
        payload: tool
    }
}