import { useContext, useState } from "react";
import { useMoveRobots } from "./use-move-robots";
import { RoboBoardContext } from "../context";

export const useParseCommands = () => {
  const {
    state: { commands },
  } = useContext(RoboBoardContext);
  const [localCommands, setLocalCommands] = useState(commands);
  const { move, turnLeft, turnRight, report, placeRobot } = useMoveRobots();

  const handleParseCommands = (rawCommand: string) => {
    const finalCommands = [];
    if (!localCommands?.length) {
      if (rawCommand.toLowerCase().startsWith("place")) {
        finalCommands.push(rawCommand);
      }
    } else {
      finalCommands.push(rawCommand);
    }
    setLocalCommands(finalCommands);
    executeCommands(finalCommands);
  };

  const executeCommands = (rawCommands: Array<string>) => {
    if (rawCommands?.length) {
      for (let i = 0; i < rawCommands?.length; i++) {
        if (rawCommands[i].toLowerCase() === "move") {
          move();
        }
        if (rawCommands[i].toLowerCase() === "left") {
          turnLeft();
        }

        if (rawCommands[i].toLowerCase() === "right") {
          turnRight();
        }
        if (rawCommands[i].toLowerCase() === "report") {
          report();
        }
        if (rawCommands[i].toLowerCase().startsWith("place")) {
          const splitPlaceCommand = rawCommands[i].toLowerCase().split("place");
          const coordinates = splitPlaceCommand[1].trim().split(",");
          placeRobot(coordinates);
        }
      }
    }
  };

  return { handleParseCommands };
};
