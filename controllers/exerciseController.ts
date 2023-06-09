import { Request, Response } from "express";
import { ExerciseService } from "../services/exerciseService";
import { UserService } from "../services/userService";


export class ExerciseController {


    constructor(
        private exerciseService: ExerciseService,
        private userService: UserService
    ) { }


    getAllExercises = async (req: Request, res: Response) => {
        try {

            const reqQueriesLength = Object.keys(req.query).length;
            const queries = {
                level: req.query.level,
            }

            // get data from service
            const exercises = await this.exerciseService.getAllExercises(reqQueriesLength, queries);

            // send data to client
            res.status(200).json({
                data: exercises,
                message: "Get exercises success",
            });

        } catch (error) {
            res.status(500).json({
                message: '[EXE001] - Server error'
            });
        }
    }

    getOneExercise = async (req:Request, res:Response) => {
        try {
            let exercise_id = Number(req.params.exercise_id)
            let exercise = await this.exerciseService.getOneExercise(exercise_id)
            res.status(200).json({
                data: exercise,
                message: "Get exercise success",
            });
        } catch (error) {
            res.status(500).json({
                message: '[EXE002] - Server error'
            });
        }
    }

    completedExercise = async (req:Request, res:Response) => {
        try {
            if (!req.session.user) {
                throw new Error('no session data');
            }

            let {exercise_id,repetitions} = req.body
            // console.log('exercise_id', exercise_id)
            // console.log('repetitions', repetitions)
            // console.log('exercise complete');
            
            await this.exerciseService.completedExercise(req.session.user!.id,exercise_id,repetitions)
            
            // console.log('calc calories')
            await this.userService.calcCalories(req.session.user!.id)
            res.status(200).json({message:"success"})

        } catch (error) {
            res.status(500).json({
                message: '[EXE003] - Server error'
            });
        }
    }


}
