import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

// local files
import {
    containerWidthMobile,
    containerWidthDesktop,
    mergeAnimationDuration,
    tileCountPerDimension,
} from "@/constant";
import { Tile as TileType } from "@/type/tile-type";
import styles from "@/style/tile.module.css";

export default function Tile({ position, value }: TileType) {
    const isWideScreen = useMediaQuery({ minWidth: 512 });
    const containerWidth = isWideScreen
        ? containerWidthDesktop
        : containerWidthMobile;

    const [scale, setScale] = useState(1);
    const previousValue = useRef<number>(value);
    const hasChanged = previousValue.current !== value;

    const positionToPixels = (position: number) =>
        (position / tileCountPerDimension) * containerWidth;

    useEffect(() => {
        if (hasChanged) {
            setScale(1.1);
            setTimeout(() => setScale(1), mergeAnimationDuration);
        }
    }, [hasChanged]);

    const style = {
        left: positionToPixels(position[0]),
        top: positionToPixels(position[1]),
        transform: `scale(${scale})`,
        zIndex: value,
    };

    return (
        <div className={`${styles.tile} ${styles[`tile${value}`]}`} style={style}>
            {value}
        </div>
    );
}