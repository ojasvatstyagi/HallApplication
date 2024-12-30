// models/Request.js
const requestSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    hall_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hall",
      required: true,
    },
    request_date: {
      type: Date,
      default: Date.now,
    },
    request_for: {
      type: Date,
      required: true,
    },
    request_timing: {
      type: String,
      required: true,
    },
    purpose: {
      type: String,
    },
    status_admin: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    status_staff: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    approval_date_admin: {
      type: Date,
      default: null,
    },
    approval_date_staff: {
      type: Date,
      default: null,
    },
    priority: {
      type: Number,
      default: 0,
    },
    comments: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Request", requestSchema);
