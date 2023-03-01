// const jointStatusDescription = ["全直", "半直", "半屈", "全屈"];
// const positionStatusDescription = ["高", "中", "低"];

export const exercises = {
  swingArm: [
    {
      // 0 - arms lowered
      jointStatus: {
        leftShoulder: [3],
        rightShoulder: [3],
        leftElbow: [0],
        rightElbow: [0],
      },
    },
    {
      // 1 - T pose
      jointStatus: {
        leftShoulder: [1],
        rightShoulder: [1],
        leftElbow: [0],
        rightElbow: [0],
      },
    },
    {
      // 2 - arms raised
      jointStatus: {
        leftShoulder: [0],
        rightShoulder: [0],
        leftElbow: [0],
        rightElbow: [0],
      },
    },
    {
      // 3 - T pose
      jointStatus: {
        leftShoulder: [1],
        rightShoulder: [1],
        leftElbow: [0],
        rightElbow: [0],
      },
    },
  ],
  pushUp: [
    {
      // 0 - push up
      jointStatus: { leftElbow: [0], rightElbow: [0] },
      positionStatus: { nose: [0] },
    },
    {
      // 1 - laid down
      jointStatus: { leftElbow: [2, 3], rightElbow: [2, 3] },
      positionStatus: { nose: [1] },
    },
  ],
  sitUp: [
    {
      // 0 - laid down
      jointStatus: { leftHip: [0], rightHip: [0] },
      positionStatus: { leftKnee: [0, 1, 2], rightKnee: [0, 1, 2] },
    },
    {
      // 1 - sit up
      jointStatus: { leftHip: [2], rightHip: [2] },
      positionStatus: { leftKnee: [0, 1, 2], rightKnee: [0, 1, 2] },
    },
  ],
  legRaise: [
    {
      // 0 - laid down
      jointStatus: { leftHip: [0], rightHip: [0] },
      positionStatus: { leftAnkle: [3, 4, 5], rightAnkle: [3, 4, 5] },
    },
    {
      // 1 - legs raised
      jointStatus: { leftHip: [1], rightHip: [1] },
      positionStatus: { leftAnkle: [0, 1, 2], rightAnkle: [0, 1, 2] },
    },
  ],
  squat: [
    {
      // 0 - stand up
      jointStatus: {
        leftHip: [0],
        rightHip: [0],
        leftKnee: [0],
        rightKnee: [0],
        leftElbow: [0],
        rightElbow: [0],
      },
    },
    {
      // 1 - squatting
      jointStatus: {
        leftHip: [2, 3],
        rightHip: [2, 3],
        leftKnee: [2, 3],
        rightKnee: [2, 3],
        leftElbow: [2, 3],
        rightElbow: [2, 3],
      },
      positionStatus: { leftKnee: [0, 1, 2], rightKnee: [0, 1, 2] },
    },
  ],
  sideJump: [
    {
      // 0 - stand up
      jointStatus: {
        leftHip: [0],
        rightHip: [0],
        leftKnee: [0],
        rightKnee: [0],
      },
    },
    {
      // 1 - jump to left
      jointStatus: {
        leftHip: [2, 3],
        leftKnee: [2, 3],
      },
      positionStatus: { leftKnee: [0] },
    },
    {
      // 2 - jump to left
      jointStatus: {
        rightHip: [2, 3],
        rightKnee: [2, 3],
      },
      positionStatus: { leftKnee: [3, 4, 5] },
    },
    {
      // 3 - jump to right
      jointStatus: {
        rightHip: [2, 3],
        rightKnee: [2, 3],
      },
      positionStatus: { rightKnee: [2] },
    },
    {
      // 4 - jump to right
      jointStatus: {
        leftHip: [2, 3],
        leftKnee: [2, 3],
      },
      positionStatus: { rightKnee: [3, 4, 5] },
    },
    {
      // 5 - stand up
      jointStatus: {
        leftHip: [0],
        rightHip: [0],
        leftKnee: [0],
        rightKnee: [0],
      },
    },
  ],
};
