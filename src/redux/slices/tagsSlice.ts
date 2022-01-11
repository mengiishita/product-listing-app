import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectedTags } from "../../models/SelectedTags";

const initialState: SelectedTags = {
    tags: ["All"],
}

export const tagsSlice = createSlice({
    name: "tags",
    initialState,
    reducers: {
        setTags(state, actions: PayloadAction<string>) {
            const tagIndex = state.tags.indexOf(actions.payload);
            if (actions.payload === "All") {
                state.tags = ["All"];
            } else if (tagIndex === -1) {
                if (state.tags[0] === "All") {
                    state.tags.splice(tagIndex, 1)
                }
                state.tags.push(actions.payload);
            } else {
                state.tags.splice(tagIndex, 1)
                if (state.tags.length === 0) {
                    state.tags.push("All");
                }
            }
        },
    },
});