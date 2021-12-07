import { model, models, Schema, Model, Document } from 'mongoose';

interface IUser extends Document {
  tab: string;
  name: string;
  content: string;
  deadline: string;
}

const TodoSchema = new Schema(
  {
    tab: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    deadline: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todos: Model<IUser> = models.Todos ||  model('Todos', TodoSchema);

export default Todos;
