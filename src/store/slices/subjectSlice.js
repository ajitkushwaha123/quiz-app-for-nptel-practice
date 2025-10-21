import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  subjects: [], 
  loading: false,
  error: null,
};

export const newSubject = createAsyncThunk(
  "subject/newSubject",
  async (subjectData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/subjects", subjectData);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

export const fetchSubjects = createAsyncThunk(
  "subject/fetchSubjects",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/subjects");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || { message: err.message });
    }
  }
);

const subjectSlice = createSlice({
  name: "subject",
  initialState,
  reducers: {
    // You can add manual reducers if needed later (e.g. removeSubject)
  },
  extraReducers: (builder) => {
    builder
      // --- Fetch Subjects ---
      .addCase(fetchSubjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubjects.fulfilled, (state, action) => {
        state.loading = false;
        state.subjects = action.payload;
      })
      .addCase(fetchSubjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch subjects";
      })

      // --- Create New Subject ---
      .addCase(newSubject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(newSubject.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.subjects.unshift(action.payload); // ✅ Add newly created subject at top
        }
      })
      .addCase(newSubject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to create subject";
      });
  },
});

export default subjectSlice.reducer;
