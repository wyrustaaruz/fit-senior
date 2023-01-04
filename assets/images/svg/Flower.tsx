import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

function Flower(props:any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      width={1000}
      height={1000}
      {...props}
    >
      <G id="OBJECTS">
        <G id="&lt;Clip Group&gt;">
          <G id="&lt;Group&gt;">
            <Path
              id="&lt;Compound Path&gt;"
              fillRule="evenodd"
              d="M151.2 1309.6c-4.1-25.4-8.7-50.8-12.2-76.3-1.8-13.1-7.1-24.6-13-36.1-14.6-28.2-28.4-56.8-39.5-86.6-10.5-28.3-17.3-57.7-22.3-87.4-3.3-19-6-38-8.3-57.1-1.8-14.4-2.9-28.9-3.6-43.4-.9-16.7-1.4-33.4-1.2-50.1.4-30.6 4.2-60.8 10.1-90.8 7.1-35.2 14.3-70.4 20.9-105.7 5.1-27 8-54.2 8.3-81.7.1-17.4.5-34.9.7-52.3 0-10.5-.3-21-.2-31.6.4-27.1 4.8-53.8 11.3-80.1 4.7-19.3 11.4-37.9 19.9-55.8 1.7-3.5 4.1-6.8 6.5-10 1.1-1.5 2.9-2.5 5.1-4.3.9 2.2 1.7 3.6 1.8 5 .4 3.4.6 6.9.5 10.3-.5 19.8-.9 39.6-1.8 59.4-.8 16.2.3 32.3 2.1 48.4 1.6 14.7 4.1 29.4 6.2 44.1.1 1 .5 2 1 3.9.9-1.6 1.4-2.3 1.7-3 13.3-29.1 25.1-58.7 33.5-89.7 2.4-8.9 6.2-17.4 9.7-26 3.5-8.7 9.4-15.9 16.1-22.4 3.2-3.1 4.9-3.3 8.5-.6 7.5 5.8 14.3 12.4 19.8 20.1 5.3 7.5 7.6 16 8.7 25 .1 1.2.3 2.5.5 4.4 1.6-1.3 2.8-2.3 4-3.3 4.5-3.6 8.8-7.5 13.6-10.8 6.3-4.4 10.7-2.6 13.2 4.7.3 1 .5 2.1.8 3.1 9.5-4.1 9.5-4.1 11.2-10.3 4.1-1.3 4.3 2.7 6.3 4.8 2.5.2 5.1 1 7.7-1.4.9-.9 3.5-.4 5.1.1 13.6 3.4 23.6 11.5 30.7 23.4 5.6 9.3 9 19.4 11.2 30 .5 2.6 1.1 5.2 2.6 8.1 1.1-2.4 2.2-4.9 3.4-7.2 3.5-6.3 6.8-12.8 10.6-19 4.6-7.6 11.6-12.4 20.1-14.8 6.1-1.7 12.2-3.4 18.2-5.1 2.7 1.5 3.7 3.8 4.3 6.3.4 1.9.8 3.9.9 5.9 1.1 27-.3 53.6-7.9 79.8-5.7 20-12.8 39.3-20.2 58.6-7.4 19.4-14.5 38.8-21.7 58.2-4.7 12.4-10.6 24.3-18.2 35.2-16.2 23-37.7 38-65.6 43-10.1 1.8-20.5 2.7-30.7 4-3.9.5-7.7-.9-11.8.7-3 1.1-5.2 2.6-6.4 5.2-3.4 6.8-6.8 13.7-9.6 20.7-10.9 28-17.9 57.1-23.3 86.6-6.9 37.5-11.1 75.4-15.5 113.3-2.4 20.9-5.5 41.7-7.9 62.6-2 18.6-4 37.2-5 55.9-.9 17-1.1 34.1-.5 51.1.9 29.2 2.3 58.4 4 87.6 1.7 27.7 4.9 55.3 10.1 82.7.7 3.5 1.1 7.1 1.7 10.7h-3.3c-.5-3.2-1-6.4-1.7-9.6-5.1-27-8.2-54.2-10-81.6-1.3-18.4-1.9-37-2.8-55.4-1.3-27.8-3.1-55.5-1.1-83.3 1.7-22.4 3.7-44.9 6.3-67.2 3.4-30.7 7.7-61.2 11.3-91.8 3.7-31.1 7.9-62 14.4-92.5 7.3-33.8 15.7-67.3 33.2-97.4-9.3-4.7-18.9-9.4-28-14-.6 8.8-.2 17.3-1.9 25.3-3.6 16.3-8 32.4-12.7 48.4-8.4 28.2-16.2 56.4-21.1 85.5-8.2 48-12.6 96.4-16.3 144.9-1.7 22.5-3.1 44.9-4.7 67.4-2.3 31-2.6 62-1.7 93 .3 10.3 1.6 20.6 2.8 30.9 1.2 11 2.5 22 4.2 32.9 3.2 21.5 6.8 43 10.2 64.5h-3.3zm249.3-852.2q0-.1.1-.1-.1 0-.1.1zm.1-5.1v5c1.7-1.4 2.7-3 0-5zm-1.4 9.2c.9-.4 2.1-.7 2.7-1.4 1.5-1.8.2-2.4-1.4-2.7-1 1.1-2.6 1.9-1.3 4.1zM219 701.5q-2 3.9-4 7.9c.8 1 1.6 2 2.9 3.6v-4.6c1.3-.4 2.2-.6 3-.8-.5-2.1-.8-3.9-1.2-5.6q.8-1 1.7-2l-2-1q-.2 1.3-.4 2.5zm-4 7.9h-.1.1zm-2.3 6c-.2.7.6 1.7 1 2.6q.6-.1 1.2-.3v-8.3c-.7 2-1.7 3.9-2.2 6zm8.7-15.4c.8.5 1.5 1.1 3 2.2-.5-2.7-.9-4.4-1.3-6.4 1.2.8 2 1.3 2.7 1.8 4.2-5 3.7-10.3 1.7-15.8 1.1 2 2.2 3.9 3.4 5.9 2.5-2.4 2.5-4.5.8-7-1.4-2.2-2.4-4.6-3.6-6.9-.6 1.6-1.3 3.2-1.8 4.8-1.5 4.6-2.7 9.2-4.4 13.7-1 2.6-1.4 5.1-.5 7.7zm6.7-26.2l.1-.1-.2-.2q.1.1.1.3zm6.1 7.5c3-2.3.1-4.4.3-6.6.8.6 1.7 1.2 2.9 2 .4-1.6 1.2-3 .9-3.9-2.1-5.5-4.2-11-8-16.8-.8 6.7-1.5 12.1-2.1 17.7l6 7.6zM221.4 700l.1.1-.1-.1zm1.8 14.5c-.9.5-1.8 1.1-2.7 1.7 2.7 1.7 4.7 1.2 5.9-1.8 3.3-3 7-5.7 8.8-10.3-7.4 1.3-7.4 1.3-11.3 5.1.5.4 1 .9 1.5 1.4-1.2.6-2.6.9-3.5 1.9-1.2 1.3.2 1.6 1.3 2zm71.9-271.4c-.4-1.4-.7-2.8-1.3-5.2-2.2 3.3-3.8 5.5-5.1 7.8-.6 1-1 2.4 1 2.8-.5 3-1.1 6-1.7 9.2 2.7-2.2 5.2-4.2 7.6-6.1-2.3 3-4.6 5.9-6.8 9-.7 1-.9 2.3-1.3 3.4q.4.2.9.5l4.6-4c-1.3 2.7-3.1 4.8-4.7 7.2-1.1 1.5-2.2 3.4.5 4.6-.2 2.4-4.2 4.6-.4 7.3-.7 1.4-1.6 2.7-2 4.2-.3 1-.8 2.6 1.2 2.7q-1 2.7-2.1 5.3.4.3.9.6 4.1-3.7 8.3-7.4c-1.4 2.5-3.2 4.5-4.9 6.6-3.9 4.4-3.9 4.4-3.9 6.3 7.8-7 15.8-14 23.9-21.2-.3-1-.7-2.1-1.2-3.6-1.5.9-2.6 1.6-3.7 2.3l-.2-.4 3.4-4.4c-.9-1-1.5-1.6-2.1-2.3V467c-.3-1.1-.6-2.2-1-3.5-1.6 1-2.8 1.8-4 2.5.2-1 .7-1.5 1.2-2.1.5-.5 1.1-.9 1.5-1.5 1.2-2 .6-2.9-2.3-3.7.1-1.5 2.3-3.1-.2-4.6-.9.4-1.7.8-2.9 1.4 3.2-4.3 3.2-4.3 0-6.9.7-2.9-.8-4.5-3.2-5.5zm-26.2 181c3.8-3.8 2.8-8.9 4-13.5-1.3-.1-1.9-.2-2.6-.3-1.7.9-3.4 1.9-5.2 2.5-1.9.6-2.9 1.9-3.3 3.8-.7 3.2-1.6 6.4-2.2 9.6-.1.4.7.9 1.2 1.4-1 1.6-1.9 3.2-3.2 5.2 1.9.1 2.9.2 4 .3-2.2 1.2-5 2-5.2 5.6 3.3-1.3 6.3-2.5 9.3-3.8q.3.6.5 1.1c-2.9 1.5-5.8 3-8.6 4.5-2.3 1.2-4.2 2.7-3.4 5.9 2.1-.6 4-1 5.8-1.5q.1.2.2.5c-2.4 1.3-4.9 2.6-7.7 4.2 1 .5 1.6.8 2.2 1q-2.1 1.6-4.1 3.1c3.7-.4 6.7-2 10-2.8 2.6-.7 4-2 4.6-4.6 1.1-4.9 2.4-9.8 3.5-14.7.2-.6-.6-1.4-.9-2.1 1.3-1.6 3.7-3 1.1-5.4zm1.4-13.8h.1-.1zm3.2-8c-1.3.2-2.5.5-3.6.7 1.1-2.3 4.6-2.4 4.8-5.9.3-5.5 1.2-11 3.9-15.9.2-.4-.6-1.3-.9-2 3.4-1.1 4.8-4 6.5-7-1-.2-1.6-.3-2.3-.4 11.2-7.8 17.9-19.8 27.4-29.3-3.3 1-6.5 2.3-9.3 4.2-8.3 5.5-16.4 11.3-24.7 17 0 3-2.3 5-3.3 7.5q3.4-1.9 6.9-3.9c-2.3 4.3-8 5.1-9.1 10.7 1.6-.4 2.6-.7 3.6-1-1.3 1.6-2.7 3.2-4.2 5 1.1.3 1.6.4 2.1.5-1.3 1.9-4.3 3-3 6.2q1.2-.2 2.3-.4c-4.6 2.6-3.2 7.2-4.9 11.1h2.9c-.9 1.9-4.8 1.4-3.1 4.9.7-.3 1.3-.5 1.9-.7-2.1 2.1-1.7 5.5-4.3 7.9 2.9-.5 5.1-.9 7.2-1.2 3.4-1.6 3.6-4.5 3.2-8zm1.8-38.6l-.2.2.2-.2zm3.7-4.7c10.3-8.2 21.3-15.2 33.3-20.5 2.8-1.2 4.9-2.7 5.6-5.8-.9-.3-1.6-.5-2.3-.7 3.4-3.1 3.4-4.7.2-10.5q-9 4.9-18.1 9.8c1.4-1.4 2.5-3.1 4.1-4 4.8-2.8 9.8-5.3 15.3-8.3-3.2-1.4-.8-3.9-1.8-6-1.2.2-2.4.3-3.6.5 3.2-1.5 4.2-3.5 2.2-7q-4.4 2.6-8.7 5.3l-9.2 5.6c-.9 1-1.8 2-2.7 2.9-4.3 3.9-8.6 7.8-12.8 11.7-.8.8-1.2 1.9-2.3 3.6 2.4-1.3 3.8-2.1 5.9-3.3-2.3 3.6-5.9 4.9-6.7 9.4 2.9-1.9 4.9-3.2 7-4.5.2 1-1.6 2.6 1 2.8l-8.6 9.2.4.6q3.7-2.2 7.4-4.3c-1.7 2.5-4 4.2-6.1 6-4.3 3.5-4.2 3.5-4.3 7.2 2.9-1.8 5.1-4.5 8.6-4.9-3.3 2.9-6.6 5.9-10.5 9.4 1.7.3 2.3.4 3 .5 1.2-1.6 2.2-3.5 3.7-4.7zm17-41.6q.1-.1.2-.1-.1.1-.2.1zm3.7-3.6c4.7-3.3 9.6-6.4 14.8-9.8-.8-1.1-1.6-2-1.8-2.3.3-2.3.6-4.1 1-6.7-3.3 1.8-5.7 3.2-8.6 4.8 1.7-4.2 7.7-4.4 7.3-10.3-12.9 9-22.4 20.2-30.6 32.6q4.6-3.4 9.1-6.9c-3.2 5.2-8.9 8.2-10.9 14.2 2.9-1.9 5.3-4.3 7.9-6.4 2.7-2.1 5.5-3.8 8.3-5.7 1.1-1.2 2.1-2.6 3.5-3.5zm99.8-17.3c.8-1.1 2.4-2.2 2.3-3.2-.4-2.8.3-5.5.3-8.4-7.6 3.7-12.4 8.7-13.2 13.3.8-.1 1.4-.2 2.7-.3-1.6 1.9-2.8 3.2-4.1 4.8 1.1.1 1.8.2 2.5.3-2.6 4.9-6.9 9-7.5 14.6 5.7-3.3 11.3-6.5 16.8-9.8 2.1-1.2 1.7-2.8-1-4.4.8-.5 1.7-.9 2.3-1.5 1.8-2.2 1.4-3.7-1.1-5.4zM316.1 680l-.1-.1.1.1zm-2.5 2c6.6 1.1 13.2 2.2 20.2 3.4.2-1 .1-2.4.7-3.2.8-1.1 2.2-1.7 3.4-2.5q-.2-.6-.4-1.1c-3.6-.6-7.2-1.1-11.8-1.8 3.3-.3 5.7-.4 8.1-.6-4.6-1-9.1-1.1-13.7-1-3.2 0-5 2-6.5 5.5 1.3-.4 1.9-.5 2.5-.7.6 2.4-2 1.3-2.5 2zm-75-160.7c2.5-2.4 4.7-5.3 7.5-7.1 4.1-2.4 6.2-5.9 7.5-10.1 0-.2-.4-.5-.6-.9l-1.8 1.2-1.4 1c7-8.5 7-8.5 7.7-12.7-7.6 7.2-14.7 13.8-19.7 22.4.8-.3 1.6-.6 3.1-1.1-1.3 1.9-2.3 3.4-3.2 4.9-.7 1.1-.5 2 .9 2.4zm-1.8 4.9c5.6-1.7 8.7-4.5 10-9.8-3 1.8-5.6 3.4-8.2 5-.5 1.3-1 2.7-1.8 4.8zm1.8-4.8v-.1q-.1.1-.1.2 0-.1.1-.1zM267 717.1c-1.6-.1-4-.9-4.6-.2-2.6 3.2-6.6 1.8-9.5 3.7-.2.2-.3.6-.4.9 7.7 4 15.5 6.9 24.1 2-.3-.5-.6-1.1-.9-1.8 6.3 2.9 11.2-.9 17.8-2.9-3.8-2.4-6.5-4.4-9.4-5.7-2.8-1.4-5.6-3.8-9.6-1.8 1.7 1 3.1 1.8 4.4 2.6-2 0-3.7-.3-5.4-.8-1.5-.4-3.9-1.2-3.7 1.1.2 2.7-3.8.3-2.8 2.9zm110.9-264.3c-1.1.4-2.2.8-3.5 1.3 2.5 3.4 5.1 6.2 7 9.5 1.9 3.5 3.4 7.2 4.7 11 1.1 3.3 1.6 6.9 2.4 10.3q.8-.1 1.5-.2c0-5.5.5-11.1-.1-16.6-.6-5.6-2.3-11-3.4-16.5 1.1 2.2 2.7 4.2 3.3 6.4 1.2 4.3 1.8 8.8 2.7 13.9 4-8.6 1.8-16.1-1-23.7-2.8.1-5.4-.1-4.9 3.6-1.1-1.3-2.2-2.7-4.3-1.5-1.5.9-3 1.8-4.5 2.6zm-100.2 7.8c-1.6-1.4-3.2-2.8-5-4.3-1.6 2.5-1.7 4.8.1 7.1-3.1.6-3.1 2.2-1.9 4.4 1.3 2.3 2.4 4.7 3.7 7 2.6 4.2 5.3 8.4 8 12.5 1.2-4.2 1.8-8.2 1.5-12.2-.2-2.4.7-5.3-1.6-7.3.8.2 1.6.3 2 .4.3-2.5.8-4.5.8-6.5 0-2.3.2-4.9-.7-6.8-1.7-3.5-4.3-6.6-6.5-9.9-5.6 1.4-4.3 6-5.2 8.5 1.9 2.8 3.3 5 4.8 7.1zM308.1 709c5-.2 6.9-5.1 12.2-7.1-1.8-1.1-2.7-1.6-3.6-2.1q.1-.2.3-.5c1.2.3 2.4.6 4.6 1-7.6-5.9-18-7.3-25.6-4-.6.3-.7 1.5-1.2 2.9-.1 0-1.1.2-2.3.5 1.4 1.1 2.6 2 3.7 2.9-4.8-2.5-8.6-.4-12.5 2.9 2.5 1 4.7 2 7.6 3.2-4.6.7-8.4-3-12.6-.2 5.7 3.1 11.1 6.2 17 9.4 3.6-2.1 7.5-4.3 11.3-6.7.6-.4.8-1.4 1.1-2.2zm2.3-224.5v.1l-.1-.2.1.1zm0-5.8c-3 2.5-5.4 4.4-7.7 6.4q-7.8 7.1-15.6 14.3c-2.3 2.2-3.9 4.7-3.2 8.8 3.2-3 6.1-5.8 9-8.5-3 5.9-9.4 9.4-10.5 16.4 2.7-2.7 4.9-5.9 7.6-8.5 6.3-6.2 12.8-12.1 19.4-18.1 1.8-1.6 3.5-2.8 1-5v-5.8zm-46.3-42.4c1.8-1.3 3.6-2.6 5.6-4.1 0-.1 0-.7-.2-1.1-2.5-5.9-3.8-6.4-9.1-2.5-4.9 3.7-9.7 7.6-14 11.9-2 2-3 5.2-4.1 7.9-.2.5.9 1.6 1.4 2.3-.3 1.3-.6 2.6-1.1 4.3 1.7-.7 2.8-1.3 3.9-1.8-2 3-5.7 4.8-3.4 9.3 2.2-1.6 4.3-3.2 6.4-4.8-1.6 1.9-3.1 3.9-4.9 5.6-2.4 2.1-3.4 4.4-2.4 7.7 1.2-.7 2.1-1.3 4.2-2.5-2.8 3.9-6.2 6.4-5.2 11 2.9-2.5 5.5-4.8 8.2-7.1-2.3 2.8-4.6 5.5-6.9 8.2-1.4 1.7-2.7 3.3-1.7 5.8.8-.2 1.6-.4 2.6-.7-1.6 3.3-5.9 5.4-2.7 9.7l-2.2 4.4q.5.3.9.5l7.4-6.6c-2.4 5.9-9.7 8.8-9 16.5.7-.4 1.2-.5 1.6-.9 5.7-5.9 11.4-12 17.4-17.7 2.3-2.2 4-4.5 4.7-7.6.7-2.5.7-5.1 2.2-7.4.9-1.3-.1-1.8-1.4-1.9 4.6-3.9 3.9-9.7 5.5-15.2-1.2.4-2 .6-2.7.8 4.7-4.2 4.5-9.8 4.9-16-1.9.8-3 1.2-4.1 1.7l4-3.4c1.3-1.1-1.9-1.9-.1-3.5.8-.7.1-3.1.1-5.1-2.5 1-4.1 1.6-5.8 2.3zm104.5 126.4l.2-.2.1.1q-.1.1-.3.1zm-1.8 2.3c-.8 1-1.7 2.1-2.4 3.2l1.5 1.2c-2.6 1.6-4.3 4.1-4.6 7-.2 1.9-.5 3.3-1.8 4.8-.8 1-2.2 2.9.1 3.9-1 1.2-2.1 2.4-3.9 4.5 8-3.1 14.8-5.7 21.4-8.3.6-.3 1.3-.8 1.6-1.4 1.5-3.9 2.9-7.8 4.6-12.3-3.3.6-6 1.1-8.7 1.6 2.6-1.5 5.3-2.4 8.1-3.1 1.7-.5 2.1-1.5 1.7-3.8-5.9 2.4-11.4 4.7-16.9 6.9 1.6-1.3 3-3 4.8-3.9 3.3-1.5 6.7-2.8 10.2-3.6 3.5-.9 5.1-2.9 5-6.7-1.4.1-2.7.2-4 .2 4.9-1.3 6.9-4.5 6.8-10-5.2 1.8-10.1 3.6-14.9 5.3 1.8-1.3 3.6-2.9 5.6-3.8 2.6-1.3 5.4-2.1 8.2-2.9 2.5-.8 3.5-2.1 2.8-4.9-3.3 1.1-6.4 2.1-9.5 3.2 2.4-2 4.9-3.5 7.6-4.3 3.7-1.1 4.7-3.4 4.4-7.2-2.1.6-3.9 1.1-5.7 1.7 6.6-4.6 6.6-4.6 7.2-7.4-8.9 3.1-15.7 8.5-21.6 16.3 1.3-.2 1.8-.3 2.3-.4.5-.1 1.1-.2 2.7-.6-4.5 3.3-8.7 5.5-8.2 11.1 1-.1 1.8-.3 2.7-.4-1.1 1.9-4.8 2-3.6 5.5-2.5 1.4-3.6 3.5-3.4 6.5.8-.1 1.3-.1 1.7-.2q-.9 1.1-1.8 2.3zM234 717.9c.7-1.5 1.4-3 2-4.5.5-1.3.9-2.6 1.5-4.6-5.8 5.5-10.8 10.4-16.4 15.6 3.7-.9 6.9-1.7 10.1-2.5.4 2.2 1.7 1.5 2.6.6 1.4-1.6 2.6-3.5 3.9-5.2q.3.2.6.3-1 2.3-2 4.7c3.4 1.3 4.5-1.9 6.7-2.8.1 1.5 1.1 2.1 2.1 1 1.9-2.2 3.7-4.5 5.2-7 1.8-2.9 3.2-6 4.8-9q.5.2.9.5-3.3 7.2-6.5 14.4c3.6-2.4 7.4-4.1 9.5-8.4 7.4-15.1 6.4-30.6 3.8-46.8-3.7 3.8-2.9 8-2.7 12.1.1.2-.3.4-.5.6-.4-1-.7-2-1-2.9h-1.1c-.2 2-.5 4-.8 6.1-.6-.2-1.1-.4-2.2-.8.2 3.2.5 6.3.5 9.3.1 8-1.5 15.4-6.6 21.8q1.2-3.5 2.5-7.1c2.3-6.3 3.3-12.6 2.1-20-3.2 3.1-2.3 6.8-3.2 10-.2-1.2-.4-2.1-.8-4.1-1.7 2.9-3 5-4 7.2-.6 1.4-1.2 2.3-3.5 5.2-1.2 1.5-1.6 3.5-2.2 5.4-1.3 3.8-1.8 8.1-5.3 10.9zm137.3-255.2v-.2l.1.1zm-3.2-2.5c-2 2.4-2.1 2.4-.6 4.8 5.5 8.8 9.5 18.3 12.3 28.2 1.1 4 1.9 8 3 12.4 3.4-3.7 2.4-8.4 3.8-12.3 1.5-4 0-9.2-1-13.7-1-4.6-2.6-9.1-4.6-13.3-2-4.1-4.7-8-9.4-10.8-.8.9-1.6 1.6-2.3 2.4.6 1.1 1 1.7 1.3 2.3.3.7.4 1.5.7 2.3q-1.6-1.2-3.2-2.3zm-47-11.8c1.7 1.3 3.5 2.4 5.1 3.8 3.3 2.9 6.5 6 9.6 8.8-3.1-5.6-5.7-11.9-9.7-17.2-5.9-7.9-14-12.7-24.1-14.3.8 4.5 6.3 3.1 7.6 6.7-1.2-.2-2.3-.4-3.8-.7 1.8 1.8 3.2 3.1 4.6 4.4-1.7-.6-3.4-1.2-6.1-2.1 1.2 2.2 1.8 3.4 2.4 4.7.3.5 1 1.5.9 1.6-2.5 2.5.1 3.3 1.4 4.4 1.5 1.4 3.1 2.6 4.5 4 10.3 10.8 18.9 22.8 25.9 36 1.3 2.5 1.8 5.3 2.6 8 1.7 0 2.2-.7 1.5-2.4q-3.4-7.9-6.8-15.9c-.4-1-.7-1.9-1.1-2.9q.4-.2.8-.3 3 5 6.1 10c-.5-7.8-1.5-15.2-7.3-21-3.5-3.6-6.9-7.4-10.4-11.1-1.3-1.4-2.4-3-3.7-4.5zm20.9 48.1q0 .1.1.2 0-.1-.1-.2zm-5.1-7.9c-6.6-12.2-14.6-23.4-23.9-33.6-1.5-1.7-3.3-3.2-5.1-5-2.3 5.4 3.9 6.3 4.2 10.3-1.7-1.2-3.2-2.3-4.6-3.4q-.5.4-.9.8c1.2 2.1 2.1 4.5 3.7 6.2 11.2 12.3 20.8 25.5 26.5 41.3.1.3.5.4.8.5.3-.2.8-.5.8-.5q-3.8-10.6-7.6-21.1.2-.1.5-.3c3 5.9 6 11.9 9.6 19 .5-2.9.8-4.6 1-6.3h.1c-1.7-2.6-3.6-5.2-5.1-7.9zm-170.4 79.7c.7.8 1.5 1.5 2.9 2.9v-11.6c.4.2 1.2.8 2.1 1.4.2-.8.4-1.4.4-1.9 0-.7 0-1.4-.3-2.1-3.4-10.8-8.1-20.8-16.3-28.9-1.2-1.2-1.9-2.8-2.7-4.2-2.7.2-2.7 2.4-3.4 4.2 1.8 2.3 3.5 4.4 5.2 6.6l-.5.5c-1.8-1.6-3.5-3.2-5.6-5.1-1.1 2.7-2 4.8-2.7 6.5 4.6 5.9 8.8 11.5 13.1 17.1-1.4-1.3-2.9-2.5-4.2-3.9-3-3.5-5.6-7.3-9.6-10-3.7 3.7 2 4.8 1.6 7.6-1.5-.9-2.9-1.6-4.4-2.5-.9 2.5-1.6 4.7-2.3 6.8 3.6 3.8 7.2 7.4 10.5 11.2 2 2.4 3.6 5.2 5.4 7.8-1.6-1.6-3.3-3.2-4.8-4.9-3.8-4-7.4-8.2-12.1-12.1-1.3 3.9-3.9 6.7-1.2 9.7-4 .9-3.5 4-4.2 6.7 12.3 8.9 21.4 20.5 28.9 33.5q.6-.4 1.2-.7l-3.2-9.8.4-.2c.9 1.2 1.8 2.5 2.9 3.9 2.2-4-.5-6.4-1.9-9.2-.2-.4-.1-.9-.1-1.5.9.6 1.5 1.1 2.7 2v-3.6c.5.1 1 .2 1.7.4 2.1-3.7-.1-6.8-1.4-10.1-.1-.4 0-.9 0-2.2 1.1 1.8 1.8 2.9 2.8 4.5 1.7-3.6-1.2-6-.9-8.8zm-13.9-44.4l-.1-.1.1.1zm4.9 3.9c6.1 6.4 10.4 13.9 13.3 22.2.5 1.4 1 2.8 1.5 4.1 3.4-1.6-1.3-5.5 2.7-6.6-.6-2.5-1.2-5.1-2.1-8.6 1.4 1.7 2.1 2.6 3 3.8 1.2-8.2-8.2-30-16-37.7-2.7 1.7-2 4.1-1.2 5.9-1.2.7-2.4.9-2.8 1.6-1.4 2.9-2.7 5.9-3.9 9-.2.6.4 1.6.6 2.4 1.7 1.3 3.5 2.4 4.9 3.9zm-12.7 73.4c-3.3-3.2-6.6-6.5-10-9.7-1.8-1.7-3.7-3.1-6-5.1q-1.5 8.6-2.4 14.4c6.9 6.2 13.6 11.5 19.4 17.6 5.7 6.1 10.5 13 16.4 20.5-.3-7.1-6.3-10.3-7.7-16.8 2.6 3.2 4.5 5.5 6.4 7.9l.8-.6-1.8-6.6c.6-.1 1.7-.2 1.7-.5.5-2.7.5-5.2-1.3-7.7-3.2-4.5-6-9.2-9-13.8q.4-.2.8-.5l9.4 12q.5-.2 1-.5c-.3-1.8-.2-4-1.1-5.5-7-11.5-14.7-22.4-25.5-30.8-1.1-.8-2.3-1.4-4.2-2.7-.2 3.3.5 6.6-.7 8-3.1 3.4-.5 4.3 1.4 6.3 4.3 4.5 8.3 9.4 12.4 14.1zm53.6-119c-.3.9-1.1 2-.9 2.9.1.7 1.9 1.2.3 2.2-4.8 2.9-3.6 8.3-5.5 12.4 14-13.3 29.7-24 45.8-34.5-1.1.2-2.3.3-3.8.5 1.7-1.5 4.3-3.3 4.1-3.7-1.4-2.9 1.3-5.9-.8-8.9-2.9 1.7-5.9 3.4-8.9 5.1-2.6 1.5-5.2 3.1-7.8 4.6 1.1-1.1 2.1-2.4 3.3-3.3 4.1-2.7 8.3-5.2 12.5-7.7 1.2-.8 2.5-1.5 1.3-3.3-1.2.2-2.3.4-4.2.8 2.1-1.6 3.4-2.7 4.7-3.7-.1-2.9-.2-5.6-.4-8.9-14.8 7.6-27.1 17.4-36.9 30q.3.5.7.9l6.6-5.6c.1 1.2-.4 1.8-.9 2.3-2.4 2.5-5 4.7-7.1 7.5-2 2.7-.3 6.8-3.1 9.4l1 1zm-15.6 68.7l.2.2q-3.2 2.9-6.3 5.8c-1.2 1.1-2.6 2-2.1 4.3 2.2-1.6 4.1-3.1 6.1-4.5-2 4.7-8.6 6.1-8.1 13 1.2-.7 2.2-1.2 3.1-1.7q-.8 1.5-1.5 2.9.3.3.6.5c2.1-1.4 4.2-2.7 7.1-4.6-3.7 6.3-11.5 8-12.3 15.8 1.2-.4 1.8-.6 2.6-.8-3.8 5.2-3.8 5.2-3.8 8.9 2.7-2.4 5.2-4.7 7.8-7-2.5 5-7.8 7.8-9.8 14 2-1.4 3.3-2.3 4.6-3.2-1.1 3.7-5.4 5.9-5.2 10.8 1.4-1.1 2.4-1.9 3.4-2.7-4.3 7.5-4.3 7.5-4.3 14.2 1.9-2.5 3.6-4.7 5.2-6.9.3 1.3-.1 2.2-.6 3.1-1.4 2.5-3 4.9-4.3 7.5-.7 1.5-2.1 3.5.7 4.6-.4 1.8-.8 3.6-1.5 6.2 2.1-2 3.6-3.4 5.1-4.7-1.1 1.8-2.3 3.6-3.2 5.6-.7 1.7-2 4-1.5 5.4 1.3 3.2.6 6.2.7 9.3 0 1.1.3 2.2.6 4.3 3-5.3 5.3-9.8 8-14.1 12.7-20.4 29.8-36.4 49.5-49.9 1.3-.9 3.1-1.9 3.4-3.1 1-3.6 1.4-7.3 2.2-11.7-2.2 1-3.5 1.6-5.3 2.4 1.6-3.2 6.7-2.6 5.9-7.5-1.2.6-2.2 1-3.1 1.5Q203.3 582 185 601.7c-1.4 1.4-3 2.6-4.4 3.9.5-.9.8-2 1.4-2.8q19.7-21.9 45.3-36.6c4.4-2.5 4.5-2.5 3.9-8.2-1.9.9-3.6 1.8-5.4 2.6-1.8.7-3.5 1.4-5.3 2.1 2.7-1.9 5.3-3.8 8.2-5.4 4-2.1 4.1-2 3.4-7.4-2.5 1.2-5 2.2-7.4 3.5-11.3 6-21.9 13.1-32 21-1.4 1.1-3 1.9-4.5 2.9.9-1.1 1.6-2.4 2.6-3.2 11.9-9.6 24.5-18.1 38.1-25 1.4-.8 2.7-1.7 3.9-2.7.2-.1 0-.9-.1-1.5-1 .1-1.8.1-2.8.2 1.1-.9 2.1-1.7 3-2.5q-.2-.5-.4-.9-4.1 1.3-8.3 2.6-.1-.4-.2-.7c2.9-1.5 5.8-2.9 9.1-4.5-.1-1.3-.2-2.8-.2-4.6-15.2 4.9-28.8 11.4-41.2 20.5-1.4 1-3.1 1.8-4.6 2.6 1.1-1.1 1.9-2.5 3.2-3.4 6.2-4 12.3-8.3 18.9-11.7 7.6-4.1 15.7-7.3 23.6-10.8.2-1.7.4-3.6.7-5.6-.8-.2-1.2-.4-1.7-.5-.5-.1-1-.1-1.9-.2 4.1-1.4 4.1-1.4 2.9-6-7 3.2-14 6.1-20.8 9.4-12.1 6-23.3 13.2-33.5 22.2-1.1 1-2.8 1.8-2.1 3.9 2.2-1.4 4.3-2.7 6.4-4zm-13.3 75.7q.1-.2.2-.5l.1.1q-.1.2-.3.4zm51-63.9q-.3.1-.5.3l-.1-.1.6-.2zM154.6 647c-1-.8-2-1.4-2.9-2.3-3.2-3.2-6.2-6.6-9.5-9.8-4.4-4.1-9.2-7.8-14.5-11-1.6 3.9.7 5.9 2.3 7.8-.7 1-1.7 1.8-1.7 2.5-.2 3.9.7 7.5 4.3 10.1-.8.2-1.4.2-1.5.4-1.2 2.8.3 7.4 2.9 8.7 10.3 5.2 19.6 11.7 28.4 19l4.4 3.6q.4-.4.9-.7c-1.3-3.1-2.5-6.2-3.6-8.7 0-2 .5-3.8-.1-5.1-.9-2.3-2.5-4.3-3.9-6.5 1 .4 1.9.7 2.7 1 2.1-5.5-3.4-8.4-3.8-13.2 1.1.9 1.9 1.6 2.8 2.4-.5-9.5-23.5-35.6-35.5-40.4-1.2 3.2-.5 5.4 2.4 7.4 2.7 1.9 4.9 4.4 7.2 6.6q-.3.4-.7.8c-2.8-2.1-5.6-4.2-9.3-6.9.2 3.6.4 6 .5 8.4 8.8 5.1 16.1 11.5 22.8 18.7 2 2.2 3.6 4.8 5.4 7.2zm129.2 52zm-.7 3.6q.5.1 1.1.3 1.2-2.1 2.4-4.3c0-1.2-.1-2.5.2-3.7 2.7-14.2 2.6-28.5-.7-42.6-2.1-9.2-5.4-18-11-25.9-3.3 3.7-3.9 7.3-1.2 11.4 1.2 1.9 1.8 4.3 2.7 6.4-1.4-.8-1.9-1.9-2.6-3-.7-1.2-1.5-2.4-2.9-4.6 5.9 25.1 8.2 49.1.6 73.2 1.4-.5 2.7-.9 3-1.7 4.2-10 5-20.6 5.8-31.2.5 9.8-.3 19.5-2.8 29.3 3.5-.7 3.3-3.3 4.2-5.2.4-.8 1.3-1.3 1.9-2q-.3 1.8-.7 3.6zm3.6-4.2c.6.4 1.5 1.2 1.9 1 3.2-1.5 4-4.4 4.2-7.6q.8-9.7 1.5-19.4h.4v21.7c1.9-2.9 6.6-3.2 6.6-7.6-.1-8.1.5-16.4-.4-24.4-2.5-21.5-10.7-41.2-20.8-60.2-.4-.9-1.2-1.5-1.8-2.3q-.5.1-1.1.2c1.6 3.9 0 7.3-.6 10.9-.3 1.3.7 3 1.4 4.4.8 1.8 1.7 3.5 2.7 5.2q-2.2-2.2-4.5-4.4c-2.1 3.1-1.3 5.7.4 8.6 7.8 13.1 12.4 27.3 13 42.6.4 10.6.6 21.2-3 31.5q0-.1.1-.2zm-6-78.1q.1.2.3.3l-.1.1-.2-.4zm5.9 78.3v0zm-66.2-18.2c4.4-5.6 6.4-14.8 3.8-18.1 2.6-1.9 3.3-4.1 1.1-6.7 2-3 1.5-6.2.8-9.7-2.1 1.2-3.7 2.1-5.3 3q-.3-.3-.5-.7c2-1.4 3.9-2.8 6.2-4.4-.3-2.5-.6-5.2-1.1-8.7-4.9 3-9 5.6-13 8.1q-.3-.5-.6-.9c4.4-3.1 8.8-6.2 13.4-9.4-.2-1.2 1.1-3.5-2.1-3.4.3-.6.3-.6-.8-3.9 0-.1-.1-.3-.3-.6 2.5-1.5 3.1-3.7 1.8-6.6-1.6.8-3.1 1.5-4.6 2.2.5-.7 1-1.7 1.7-2 3-1.5 4-3.9 3.8-7.1-.1-1.6.5-3.2.3-4.8-.2-1.3 1.6-3.3-1.2-3.9.6-1.3 1.1-2.6 1.6-3.9.1-.3.1-.7 0-1-.6-1.8-.4-3.3.4-5 .5-1.1.2-2.6.4-4.8-2.9 1.9-5.1 3.1-7.1 4.6-11.9 8.5-22.7 18.1-32.1 29.2-7.5 8.9-14.1 18.4-18.7 29.2-.8 1.9-1.2 4-1.9 6q.6.2 1.1.5c1.3-2.3 2.6-4.6 4.1-6.8 1.5-2.3 3.2-4.6 4.8-6.8q.4.3.8.5c-1.3 2.1-2.7 4.1-3.9 6.2-1.8 3.3-4.1 6.6-5.1 10.2-.7 2.3.3 5.2.9 7.9.4 2.2 1.2 4.4 2.1 7.7 1-3.3 1.5-5.4 2.3-7.4 1.1-2.5 2.5-5 3.7-7.4-.3 1.1-.5 2.3-.9 3.5-1 2.9-2.1 5.7-3.1 8.7-.5 1.7-1.3 4.8-.9 5 2.1 1.1 1.7 2.3 1.4 4-.2.7.2 1.7.6 3.2 1.7-3.9 3-7 4.3-10.2.1 2.9-.7 5.5-1.5 8-1.7 5.3-1.7 5.3-.2 7.4.6-1.3 1.4-2.7 2.1-4.1-.1 2.6-1.7 5.4.7 7.8l-.1-.1c.5 1.8-1.7 4.1.7 5.7 1.7-2.6 3.4-5.2 5.1-7.7-1.6 3.8-3.1 7.6-4.6 11.2 1.8 1.4 3.2 2.4 4.5 3.4 3.2-4.9 6.3-9.6 9.3-14.3l1 .6c-2.6 4.9-6.9 9-8.2 15.2 1.8.4 3.1.7 4.5.9 1.4 1 2.9 2 4.4 3 2.3-2.5 4.4-4.6 6.4-6.8q.3.2.6.5c-1.6 2.4-3.2 4.9-5 7.7 3.4 1.5 6.2 2.6 9.4 3.9 3.5-8.7 7-17.3 10.4-25.9q-.4-.2-.8-.5-1.8 1.3-3.6 2.5c.7-1.7 1.7-3.1 3-3.8 3.8-2 4.3-5.6 5.1-9.1 0-.2-.9-.7-1.4-1zm-1.2-59.8q-.1.2-.2.3l-.1-.1q.1-.1.3-.2zm-42 41.1q.1-.3.2-.7l.1.1q-.2.3-.3.6zm166.6-85.4l.1.1h-.2zm2.7 4.1c1.6 4.8 3.1 9.8 4.6 14.9 2.3-2.5 2.1-4.9 1.5-7.5-.7-3.2-1.4-6.4-2.1-9.5-3.3-14.8-8.3-29-16.2-41.9-1.9-3-4.1-5.8-6.2-8.8-3.8 2.7.8 4.2 0 6.3q-1.6-1.3-3.1-2.6c-1.9 1.2-1.7 2.3-.6 3.8 2.7 3.6 4.9 7.6 5.9 12.1-2.7-3.9-5.5-7.8-8.8-12.5-.7 1.7-1.3 2.5-1.2 3.2.2 1 .9 1.9 1.4 2.9 12 21.7 19.8 44.6 21.5 69.5 0 1.2.8 2.4 1.2 3.6 1.7-8.5-.3-16.5-1.4-24.6q.6-.1 1.2-.1c1 5.4 2 10.9 3 16.9 2.8-3.8 3-7.4 2-11-1.7-6.2-3.6-12.4-5.4-18.7 2.4.2 2.2 2.5 2.7 4zM194.4 511q.2-.2.3-.4l.1.1q-.2.1-.4.3zm-6.7 7.5c-1.3 1.6-2.4 3.3-3.6 4.9q.3.3.6.5 1.9-.6 3.7-1.3c-2.4 3-6.6 5.1-6.2 10.1 3.5-1.3 5.2-5 9.8-5.5-3.4 2.7-6.1 4.7-8.7 7-1.3 1.2-3.1 2.8-3.1 4.2 0 3.6-1.5 6.6-2.7 9.8 0 .2.3.6.6 1.1 16.4-14.4 35.5-24.3 55.5-32.4.2-3.5.4-6.7.6-10.4-2.3.7-3.9 1.2-5.5 1.7l-.2-.6c2.1-1 4.2-2 6.1-3 .3-2.2 1.4-4.2-1.1-5.5 2.3-2.4 2.3-2.4 1.6-6.3-6.4 3.3-12.6 6.6-18.9 9.8 1.2-1.1 2.2-2.4 3.6-3.2 4.5-2.6 9.2-5 13.8-7.5 1.8-1 3.6-1.9 2.3-4.7-2 .7-3.9 1.4-6.3 2.2 2.2-3.4 8.9-2.5 7.2-8.6-1.1.1-1.9.1-3.3.2 1.8-1.6 4.5-1.6 4.1-4.4-.3-2.3-.3-4.7.8-7.2-12.5 3.7-44 28-48.7 37.5h2.8c-3.9 2.4-5.5 5.2-5.2 9.1 2.5-1.8 4.8-3.4 7.1-5-2.2 2.5-4.5 5-6.7 7.5zm129.6 124.8v.2l-.1-.1zm1.6 1.8c.6 3.9 1 7.9 1.4 11.9.3 2.7.5 5.5.9 9 .8-1 1.1-1.2 1.1-1.5.2-1.3.2-2.5.2-3.8.5-12.8-1.4-25.3-4.5-37.7-4.5-18.2-11.5-35.5-20.9-51.8-.9-1.6-1.4-3.8-4.4-4.6 2.9 6.1 5.4 11.5 8 17l-.8.4q-4-7.4-8-14.9c-2.3 1.5-2.6 2.6-1.5 4.4 1.6 2.6 2.6 5.4 3.9 8.1q-.5.3-.9.5-2.5-4.3-4.9-8.6c-2.8 1.8-3.2 3.6-1.8 6.2 2.4 4.2 4.5 8.7 6.7 13.1 12.8 25.2 21 51.7 20.1 80.4 0 .7.3 1.4.5 2.1h1.2l1.2-7c.4.9.7 1.8 1.1 2.7 2.7-9.3.9-18.4-.2-27.6.6.6 1.5 1.1 1.6 1.7zm-2-87.6q-.2-.4-.3-.7l.4.6zm-6.3-10.2c-1.2 1.1-2.3 2.1-3.3 3 2.2 4.2 4.4 8.2 6.4 12.3 2 4.2 4 8.5 5.8 12.8q2.6 6.3 4.7 12.8 2 6.5 3.6 13.1t2.7 13.3c.8 4.6 1.4 9.3 2 14 .5 4.2.9 8.5 1.5 13.6 4-4.9 2-9.8 3-14.2.3.6.3 1.3.5 1.9.1.5.4 1.1.9 2.3.7-1.8 1.4-2.8 1.4-3.7-.2-15.3-3.7-30-7.6-44.7 5.8 12.4 8.3 25.5 9.4 39.1.9-2.1 1.4-4.2 1.2-6.2q-.7-7.8-1.9-15.6c-3.2-20.8-10-40.4-20.7-58.6-.6-1-1.5-1.8-2.2-2.7-2.3 1.1-2.1 2.3-1.2 4.1 2.4 4.8 4.5 9.7 6.8 14.5-4-4.5-5.4-10.3-9.5-15.1-1 1.2-1.7 2-1.9 2.3 1.6 4 3 7.6 4.4 11.2-1.9-3-3.9-6.1-6-9.5zm-50.5 44.1q.1.2.1.3l-.2-.2zm3 4.2c2.4-3.4-.2-6.5-.6-9.8 1 .6 1.7 1 3.2 1.9-.6-2.6-1.2-4.3-1.4-6.1-.1-1.7.2-3.5.4-6.2l1.6 3.2c2-4.2 2.1-7.9.6-11.4.9-.5 1.9-.8 2.2-1.4 1.3-2.1.3-4.1-.6-6.1-4.7-10.5-10.1-20.5-16.9-29.7-1.4-2-2.4-4.2-3.6-6.3l-5.8 9.2c1 1.9 1.9 3.5 2.8 5.2q-.3.2-.5.4c-1.1-.9-2.2-1.8-3.7-3.2-.3 3.7-1.6 6.3-3.8 8.3.8 1.6 1.6 3.1 2.8 5.3-1.5-.9-2.2-1.3-4.1-2.4.8 3.4 1.2 5.6 1.7 7.7-.6.7-1.5 1.2-1.7 1.9-.9 5-1.8 10-2.5 15-.2 1.1.4 2.4 1 3.5 8.6 14.9 16.2 30.3 20.7 47 .3 1 .9 1.9 1.3 2.8q.6-.2 1.1-.3c-1.5-7.9-4.2-15.5-6-23.3q3.5 7.3 7.1 14.5c1.6-6-2.9-10.4-2.7-16q2 4.5 4.1 9 .3-.1.6-.3-.1-2.9-.3-5.9c.6.2 1.2.3 2.4.6-.9-4-1.6-7.5-2.3-11q1.5 2 2.9 3.9zM248 523.7l.1-.1q-.1-.1-.2-.1.1.1.1.2zm4.4 4.1c5.2 8.5 10.2 17.1 15.2 25.7.8 1.5 1.6 3 2.7 5.3 1.8-4.5-1.6-7.3-1.3-11.2 1.1 1.4 1.9 2.4 2.7 3.4 3.5-5.4-1.4-8.9-2.4-14 1.6 2.2 2.8 3.8 4.2 5.7 1-4 1.1-4.1-.5-6.8-3.1-5.5-6.2-11.1-9.5-16.5-2.2-3.8-4.8-7.3-7.2-10.9l-1 .4v4.6c-2.7-.9-3.3 1-3 2.8.3 1.5 1.6 2.9 2.4 4.4q-.3.2-.5.4c-1.1-1-2.2-1.9-3.8-3.3-.9 2.2-1.6 4-2.3 5.8 1.5 1.4 3.3 2.5 4.3 4.2zm-128.9 656.4c0-1.1.2-1.6 0-2.1-3.3-10-6.6-19.9-10-29.9-4.8-14.1-10-28-14.5-42.2-10.3-32.4-18-65.4-22-99.1-2.1-17.3-3.9-34.6-5-52-.8-14.3-.2-28.7-.3-43v-7.3c.3 75.3 9.8 149 35.6 220-13.3-64.3-22.4-129.1-19.9-195 .4 2.1.4 4.3.5 6.4.5 14.7.7 29.4 1.6 44.1 1.6 26.6 4.3 53.1 8.1 79.5 4.5 30.9 10.5 61.5 19.2 91.5 2.2 7.8 5.5 15.3 8.3 22.9.8-1.2.7-2 .5-2.9-8.5-34.5-14.7-69.5-20.2-104.6-3.4-21.5-6.7-43-9.2-64.6-2.2-18.5-3.5-37.2-4.7-55.8-1.2-19.3 0-38.5 1-57.7.1-3.8 0-7.7 0-11.5.9 2.6 1 5.1.9 7.6-.2 9.6-1 19.2-.7 28.8.7 20.7 1.4 41.4 2.9 62 1.3 17.9 3.3 35.8 5.9 53.5 4.2 28.4 8.9 56.6 13.8 84.9 4.3 24.6 9.2 49.2 16.3 73.2.4 1.4 1 2.8 1.5 4.1.3-8.9 0-17.6-1.1-26.2-1.8-14.5-4.2-29.1-6-43.6-1.5-11.2-2.4-22.4-3.8-33.6-2.6-22.1-5.7-44.2-8.1-66.4-1.9-17-3.3-34-4.5-51-1.9-25.7-4.1-51.4-4.9-77.1-1.3-48.3-1.8-96.7-2.6-145-.3-16.1-.8-32.3-.5-48.4.5-21.3 2.1-42.5 2.3-63.7.5-40.5.4-81 .7-121.5.1-13.8.3-27.7.9-41.4 1.3-27 6.5-53.3 13.4-79.3.6-2.5 1.2-5 1.9-7.4q.9-3.6 1.9-7.2c-1.2.7-1.7 1.7-2.1 2.7-5.7 14.1-11 28.4-14.6 43.2-6.3 25.3-11 50.8-11.5 76.9-.6 30.1-.6 60.3-.8 90.4-.2 25.1-2.8 50.1-7.3 74.7-5.8 31.8-12.3 63.4-18.7 95.1-6.2 31.2-11.3 62.4-12.8 94.3-1.5 31.1.1 62.1 3.1 93 2.1 20.7 5.2 41.4 8.3 62 4.3 27.9 10.6 55.3 19.3 82.1 9.3 28.7 22.6 55.8 35.7 82.9.5 1.1 1.3 2.2 2.2 3.7zm9.4-431.5h.3c.6 11.1 1.2 22.1 1.7 33.1.7 14.5 1.7 29 1.9 43.5.9 60.3 1.6 120.6 2.3 180.9.1 4.5 0 9.1 0 13.6 2-13.4 3.2-26.7 4.3-40.1.4-4.3 1-8.7 1-13-.1-6-1-11.9-.9-17.9 0-16.5 0-33 .7-49.5 1.3-30.7 3-61.3 4.6-92 2.1-39.9 2.9-79.8 2.9-119.8 0-3.2-1.2-5.3-3.3-7.5-8.7-8.8-15.8-18.8-19.4-30.5-5.4-17.7-7.9-35.9-6-54.3.6-5.8 1.9-11.5 3.3-17.1 1.1-4 .9-7.9.6-11.9-1.4-15.9-3.2-31.8-3.7-47.7-.7-27.7-.4-55.5 1.7-83.3.9-11.7 1.4-23.5 2.2-35.3.5-7.9 1.2-15.8 1.8-23.7-1.1 2.2-2 4.5-2.7 6.9-3.6 12.8-4.6 26-5.3 39.2-.6 14.2-.9 28.3-1.3 42.5-.7 22.7-1.5 45.4-1.9 68-.3 13-.1 25.9-.1 38.9h-1.4c0-18.7-.2-37.4.1-56.1.2-18.7.8-37.4 1.4-56.1.7-18.5 1.7-36.9 2.5-55.3-5 18-8.9 36.4-10.1 55-1.4 20.5-1.8 41-2.1 61.5-.7 50-1 99.9-1.7 149.8-.2 14.9-1.4 29.8-1.3 44.7.1 23 .9 46.1 1.4 69.2.7 40.6 1.1 81.3 2.4 122 .7 23.9 2.9 47.8 4.6 71.7.6 8.2 1.5 16.4 2.3 24.6.5-6.1.5-12.3.5-18.4.1-45.8-.1-91.6-2.1-137.3-.9-20.7-1.4-41.3-2.1-62v-4.9c.9 1.5.9 3 .9 4.4.5 12.3.9 24.6 1.5 37 .9 18.4 2.4 36.9 2.8 55.4.7 40.7.6 81.4 1.3 122 .2 12.9 1.8 25.7 3 38.5 1.1 12.1 2.6 24.2 3.7 36.3.7 6.8.7 13.7 1.4 20.6 1.2 12.6 2.6 25.2 4 37.8.6 5 1.3 10 2 14.9.8-2.2 1.2-4.3.8-6.4-3-14.6-3.2-29.5-3.6-44.3-.5-15.3.1-30.5.3-45.8.7-35.8-.4-71.5-1.7-107.3-.8-21-1.4-42.1-2.1-63.1-.3-8.4-.7-16.7-.9-25-.2-6.9-.1-13.7-.1-20.6.7 3.4.5 6.7.7 10.1.7 13.4 1.5 26.8 2.1 40.2.8 18.7 1.7 37.4 2.2 56 .6 26.2 1.2 52.3 1.4 78.5.2 26.1-.3 52.3-.2 78.4 0 9.6.8 19.2 1.3 28.8h1c0-2.4 0-4.7.1-7.1.4-10.7.9-21.4 1.3-32.1.9-21 2.4-42 2.5-63.1.2-23.4-1.1-46.8-1.5-70.2-.5-27.4-.7-54.9-1.1-82.3q-.6-38.7-1.3-77.3c-.2-8-.7-16-.8-24-.2-7.2-.1-14.4-.1-21.7zm14.5 185.6c2.4-16.5 4.6-32.9 7.1-49.1 4-25.3 8.7-50.4 16-75 6.8-22.7 12.9-45.7 19.3-68.6 2.2-8.1 2.8-16.4 1.8-24.8-.4-3.1-.5-6.6-4.1-8.3-8.4-3.8-15.3-9.6-22.4-15.3-2.9-2.3-6-4.4-10.2-7.4v13.8c.2 40.1-1.1 80.2-3.6 120.2-1.7 28.1-2.7 56.2-3.8 84.3-.4 10-.1 19.9-.1 30.2zM129.5 569c3.9-10.5 7.5-19.9 10.9-29.5.5-1.4.2-3.2-.1-4.8-1.9-12.5-4.1-25-5.8-37.6-2.5-19-4.5-38.1-3.8-57.4l2-58.8c.1-1.8 0-3.6 0-5.4-6.4 26.9-11.6 159.6-3.2 193.5zm201.8 78.7q.4 0 .8-.1c0-1.7.2-3.4 0-5.1-1.4-10.9-2.5-21.9-4.5-32.8-3.6-19.6-10.9-37.9-20.9-55.2-.3-.5-.9-1-1.5-1.7-1 1.2-1.8 2.1-2.3 2.7 3 5.8 5.8 11.2 8.5 16.6l-.6.4c-3-5.1-5.9-10.1-9.1-15.6-1.3 1.5-2.1 2.4-2.8 3.3 3.3 5.8 7.4 10.8 8.6 17.4q-4.7-7.9-9.3-15.8c-3.4 1.6-1.9 3.3-1 5.1 3.9 7.7 8.2 15.4 11.6 23.4 8.3 19.4 14 39.6 14.7 60.9.1 3 .7 6 1.1 9q.5 0 1 .1.7-3.7 1.5-7.4c.4.6.9 1.2 1.6 2.2 2.6-6.8-1.2-12.9-.2-19.2l2.8 11.8zm-40.2-40.9c-3.5-6-6.9-12-10.7-18.5-2 4.8-2 5.3-1.2 6.8 4 8.1 8.4 16 12 24.3 7.1 16.4 11.8 33.5 12.6 51.4.2 5.2 0 10.3 0 15.7 2.6-2.3 2.2-5.3 2.3-8 .2-2.9 0-5.8 0-8.8v-7.9c.9 3.5 1.5 6.9 1.6 10.3.2 3.3-.2 6.7-.4 11.1 3-3.1 1.7-5.8 2.2-8.1 0-.2.3-.4.5-.6.2 1.2.4 2.3.6 3.5 3.2-36-9.7-67.2-27-97.8-3.4 5.1-3.4 5.1-.8 9.1 3.6 5.4 6.7 11.1 8.3 17.5zm68.4-35.2c.3-22.1-7.9-41.3-20.7-58.8-3.6 2.2-.3 4-.4 6.2-1.1-.8-1.9-1.4-3-2.1-.7 1.1-1.4 2.1-2.1 3.1 5.9 6.2 8.6 13.8 11.6 21.2-4.4-6.2-7.4-13.3-12.9-18.7-2.3 2.8-2.4 2.8-.6 5.4 11.3 15.8 17.6 33.6 21.4 52.4.4 2 .9 3.8 1.3 5.7 2.3-5-.6-9.6.4-14.5q1.2 3.9 2.4 7.7.5-.1 1.1-.3c.8-6.6-3-12.7-2.2-19.4q1.9 6 3.7 12.1zm10.4-79.7c-1.9-3.4-3.4-6.4-5.1-9.1-1.8-2.8-3.8-5.4-6.3-8.9-1.4 3.1-2.3 5.2-3.2 7.2 9.7 13.8 16.8 28.5 20.9 44.8 3.1-2.5.3-5.3.7-7.1 1.2-.4 2.6-.6 2.7-1 .3-1.6.5-3.2.3-4.8-.1-1.8-.7-3.7-1.1-5.5q.3-.1.6-.1 1.1 1.6 2.1 3.2c-2.3-16.5-7-32.1-17-46.3-1.9 3-3.3 5.3-4.7 7.6 5.5 7.1 8.8 13.8 10.1 20zM254.5 629.1c-3.4-19.3-11.9-36.4-21.9-53.1-1.4 4.9-2.4 9.6-2.9 14.4-.1 1.8.4 4 1.3 5.6 8 13.8 13.4 28.5 18.1 43.6.4 1.2.9 2.4 1.5 3.9 2.9-3.4 1.1-6.1-.1-8.9q-1.7-4.2-3.4-8.3.4-.1.8-.3 2.5 5 5.1 10c1.6-7.1-3.7-12.3-4.7-18.8q3.1 6 6.2 11.9zM365 556.6q.6.2 1.2.3c.5-2.5 1.9-5.3 1.4-7.6-3.6-17.1-8.7-33.7-17.7-48.9-.6-1-1.4-1.9-2.2-3.1-1.7 2.7-3.2 5-4.7 7.5 5 5.8 7.8 12.8 10.5 19.7-2-2.8-3.5-5.9-5.3-8.8-1.9-3-3.9-5.8-6.6-9.7-.6 2.3-1.1 3.3-.9 4.1.2 1 1 1.9 1.6 2.8 10 14.8 17.5 30.5 19.6 48.5.1.8.5 1.5 1.1 3.2 2-5.4-1-9.8.1-14.8.8 2.7 1.3 4.8 1.9 6.8zm-15.5-63.2c4.2 8.9 8.5 17.1 11.8 25.7 3.3 8.6 5.5 17.6 8.2 26.4h1.1q.5-4.8 1.1-9.5c.7-.5 2.1-.9 2.2-1.6.4-2 .8-4.3.3-6.3-3.2-14.7-9.6-28-17.8-40.6-.7-.9-1.5-1.8-2.5-3.1-1.7 3.5-3.1 6.3-4.4 9zm-84.6 219.8c4.3-1.6 4.2-1.6 5.2-4.4 4.5-13.5 5.5-27.3 4.3-41.4-.7-8-1.6-16-4-24.6-2.5 4.2.6 7.7-.8 11.2-.4-1.3-.8-2.6-1.3-4.2-2.8 3.2-1.4 6.1-.8 9.1.7 3.1.9 6.2 1.4 9.3q-.3 0-.5.1-1.3-5.2-2.5-10.3-.7 0-1.3.1c-.2 1.4-.5 2.9-.3 4.3.6 4.7 1.7 9.3 2 14 1.1 13-.4 25.7-7.2 37.3-.4.7-.6 1.4-1.1 2.4 4.5.1 5.1-3.3 6.6-5.8.1-.2.5-.2 1-.4-.2 1.1-.4 2-.7 3.3zm-83.2-191.5q.5-.2 1.1-.4c-1.8-13.6-7.4-25.7-14.8-37.9-1.1 2.9-2 5-2.6 6.7 1.3 2.6 2.4 4.6 3.5 6.6q-.4.2-.9.4c-1-1.3-2.1-2.6-3.3-4-3.5 4.8-4.5 8.9-.5 14.2 5.6 7.6 9.2 16.4 12 25.4.3 1.2.9 2.2 1.6 3.8 2.3-4.7-1.2-8-1.4-12.8 1.4 2.5 2.4 4.1 3.6 6.3 1.4-5.1-1.4-8.9-1.4-13.9 1.3 2.4 2.2 4 3.1 5.6zm93.2 14c3.4-6.2-1.9-10.6-1.3-16.8 1.4 3.1 2.3 5.2 3.3 7.4 2.6-3.7.2-6.6-1-9.7-.2-.6-.2-1.3-.5-2.8 1.4 1.8 2.1 2.9 3.2 4.4 1.3-2.5 1.6-4.4.2-6.5-3.8-5.9-7.7-11.8-11.6-17.7-1-1.4-2.4-2.4-4.1-4.1-.9 2.7-1.2 4.9-2.4 6.6-1.7 2.6-1.2 4.7.3 7 .1.1-.3.6-.4.9q-1-.8-2-1.5c-2 1.9-1.8 3.5-.4 5.4q5 7.1 9.5 14.5c2.5 4 4.6 8.2 7.2 12.9zm-70.1-121.8c2.8.6 2.2-1.3 2.2-2.5-.1-1.3-1-3.7-.8-3.8 2.8-1.2 1.2-3.5 1.4-5.2.3-2.4.1-4.9.1-7.4h1.2q.1 2.6.3 5.2c0 1.1-.2 2.2.1 3.2 1.3 4.1 1.5 5.5.1 8.2-1 2-.6 3.3 1.6 3.9-1.1 2.1-2.1 3.9-3.1 5.6q.4.2.7.4c5-5.6 10-11.1 15.3-17-4.5-4.8-9.1-9.7-15.3-13.4-5.7 5.6-10.9 11-14.5 18 6 5.9 7.9 13.8 11.1 22 1.4-5.3-2-8.7-2.3-12.7q1.6 1.8 3.1 3.6.4-.2.9-.5c-.7-2.3-1.3-4.7-2.1-7.6zm29.8 7.2c-10.7 7-21.5 13.1-29.7 23.8 2-.2 2.9-.3 4.1-.5-1.9 2.7-5.6 4-4 8.1 2.1-1.6 3.9-3.2 6.8-5.5-3 5.7-9.5 7.7-9 15.3 10.2-11.8 21.8-20.6 34.5-27.6-.2-2.1-.4-3.8-.6-5.6-1.2.1-2.4.3-4.2.6 1.7-1.3 2.8-2.2 3.9-2.9-.6-2-1.1-3.6-1.8-5.7zm-5.7 176c-.4 7.5-.8 14-1 20.5 0 1.7.2 3.7 1 5.2 6.2 10.8 12.5 21.6 15.9 33.8 0 .2.4.4.7.7 2.4-2.9-.7-5.7-.2-8.8.9 1.3 1.5 2.2 2.2 3.2.7-1.6.7-3 .2-4.1-1.3-3.2-2.9-6.3-4.3-9.4-1-2.1-1.9-4.2-2.8-6.3l.8-.4q3 5.4 6.1 10.8c-2.8-13.7-12.5-36.9-18.6-45.2zM334 511.8c2.2-3.1 2.2-3.1 1.3-5.3-4.9-13-12.2-24.6-21-35.3-.7-.8-1.6-1.5-2.7-2.5 1.5 7.3 2.8 14 4.2 20.7.3 1.2 1 2.3 1.5 3.5q5.3 11.3 10.5 22.6c.5 1 1 2.1 1.6 3.1 3.2-2.5 3.4-5.3 2.1-8.5-1.4-3.2-2.6-6.5-3.8-9.8q.5-.3 1.1-.5c1.7 3.9 3.4 7.8 5.2 12zM139.5 665.9q-.4.5-.8 1.1c3.2 3.4 6 7.5 9.8 10.3 6.3 4.6 13.3 8.5 20 12.6.9.6 1.9 1 2.9 1.5q.4-.4.8-.9-2.4-3.7-4.7-7.3c.5 0 1-.1 2.3-.2-4-7.1-10.6-10.9-16.5-15.3-6-4.4-12.2-8.5-19.3-11.9.4 5.7 4.9 7.3 7.8 10.6q-1.1-.3-2.3-.5zm94.2-247.4c-1.5-2.7-3.2-5.5-4.9-8.4-2 1.3-3.4 2.3-4.9 3.3q-.2-.3-.3-.5l3.8-4.4c-2.4-1.6-2.6-1.7-3.6-.7-4.6 5.1-9.1 10.3-13.7 15.4-2.6 3.1-1.8 6.9-3.2 11.3 2.3-1.9 3.7-3 5.1-4.2-1 3.2-4.2 4.7-5.3 8.2 9.2-6.8 17.9-13.3 27-20zm46.7 80.3c.3-.1 1.4-.1 1.6-.5 1.1-3.1 1.8-6.2-.3-9.3-3.2-4.8-6.4-9.7-9.6-14.5-.8-1.1-1.9-1.8-3.8-3.7v8.4c-5.2.9-.2 4-.7 5.4-1.2.4-2.8.6-2.8 1-.1 1.1.1 2.4.7 3.4 4 6 8.2 11.9 12.3 17.9.6.9 1.4 1.8 2.1 2.7q.6-.2 1.1-.3c-.2-3.5-.4-6.9-.6-10.5zm-101.8-47.5c-1.4 4.4-2.7 8.1-3.7 11.9-.3 1.1.4 2.6 1 3.8 2.9 6.4 6.2 12.7 8.9 19.2 1.7 4 2.7 8.4 4.1 13 3.6-5.3-1.1-9.9-.3-15.3l3.3 6.6c1.5-8.9-4.7-26.6-13.3-39.2zm185.9 165.5c-1.1.2-1.7.1-2.1.4-6.2 3.3-12.5 6.5-18.5 10.1-1.4.9-2 3-3.6 5.4 4.1-.8 7-1.4 9.9-1.9-1.8 1.1-3.6 1.8-5.6 2.2-4.3.9-6.3 3.6-6.8 8.3 2-.5 3.8-.7 5.3-1.5 2.2-1.2 1.4 2.1 3.1 1.7 3.4-.9 6.9-1.7 10.6-2.5 1.4-4.2 2.8-8.3 4.3-12.6-2.1-.2-3.6-.3-5.2-.4v-.5c2-.6 4.1-1.2 6.3-1.9.7-2.1 1.4-4.3 2.3-6.8zM184.2 514c2.2-4.9-1.1-9.2-1-14.7 1.3 2.9 2.3 5.1 3.4 7.7 2.3-7.9-6.4-32.5-14-38.9.3 2.4.6 4 .8 5.5-2.6 0-3.2 1.4-2.1 3.8.8 1.7 1.9 3.4 2.8 5q-.4.3-.9.6-1.5-2-3-3.9l-1.2.8c6.2 10.8 11.9 21.9 15.2 34.1zm-1.2-77.1c-1.2 3.5-1.9 6-2.8 8.4-.8 2-.6 3.6.6 5.6 5.4 8.8 9.7 18.2 12 28.3.2 1.1.8 2 1.5 3.6.3-2 .2-3.5.8-4.4 3.2-4.3 2.7-9 1-13.5-2.7-7.2-5.8-14.3-9-21.4-.9-2.1-2.4-3.9-4.1-6.6zm17.6 19.3c2.1-6.8-6.2-27.2-13.4-32.8-.6 2.4-.6 5-1.9 6.7-2.3 3-1 5 .5 7.7 3.4 6 6.4 12.2 9.2 18.4 1.5 3.2 2.3 6.7 3.5 10.2 3.1-3.8-.2-8 1.3-12 .3.8.6 1.2.8 1.8zm27.8 171.1c.4 3.4 1.1 6.9 1 10.3-.3 9.3 1.6 17.8 6.6 25.7 1.4 2.2 2.1 4.8 3.1 7.2q.5-.1 1.1-.3c-.6-2.4-1.1-4.8-1.8-7.8 1.4 1.7 2.3 2.8 3.2 3.9q.5-.3 1.1-.6c-.7-2.4-1.4-4.9-2.4-8.4 1.5 1.9 2.3 2.9 3.9 4.9-2.1-13.9-8.8-24.4-15.8-34.9zm118.2 35c-3.3.3-6.3.6-9.2.8q4.1-1.8 8.4-2.1c2.7-.2 3.1-1.9 3.6-4.4-8.5.6-15.6 3.8-22.6 7.5-1.7 1-3 2.8-5.1 4.8 2.3.1 3.5.2 4.2.2-1.3 2.4-5.1.7-6.2 3.7 7 .5 13.8 1 21.1 1.6.6-1.1 1.4-2.6 2.5-4.5-2.4-.2-4.3-.3-6.2-.5 4.4-.5 9.1-.3 9.5-7.1zm3.2-54c6.1-3.4 11.9-6.9 18-9.6 3.1-1.4 4.7-3.3 6-6.1.7-1.5.8-2.6 0-4.2-.3-.6 1.9-2.2 2.8-3.4.2-.2-.1-.7-.3-1.5-7.1 2.1-14 4.6-20.2 8.8-1.4 1.1-2 3.5-3.5 6.3 3.9-1.2 6.3-2 8.8-2.7-1.7 1.5-3.6 2.8-5.5 3.6-4 1.6-5.8 4.6-6.1 8.8zm.7 9.2c-1.9 2.8-5.6 3.2-6.5 6.8 6.2-3.2 11.8-6.5 17.8-8.8 4.9-2 5.8-5.5 6.6-10.2-2.6.8-4.7 1.5-6.7 2.1 8.1-5.5 8.1-5.5 8.5-7.7-6.4 2-11.8 5.4-17.3 9-3.7 2.3-5.8 5.4-6.5 9.8 1.5-.3 2.6-.6 4.1-1zm-23.4 43c1.5.3 1.9.5 2.2.3 6.5-2.7 12.9-5.7 20.1-6.2 1.7-.2 2.3-1.5 1.8-3.3-1.2-.1-2.4-.2-4.1-.4 2.8-1.4 6.7-.7 6.5-5.3h-5.8q-.1-.2-.1-.4l7.6-2.2c-.8-1.2-1.4-1.5-2-1.4-5.7 1.7-11.5 3.2-17.1 5.2-3 1.1-3.1 2.6-1.7 4.3-2.4 3.1-4.7 5.9-7.4 9.4zm-3.1 36.6c2.4-2.8 5.1-6.1 8.4-10-8.4-1.4-15.7-4.7-23.5-1.2 1.6.3 3.3.6 4.4.8-2.2.7-5.3-.7-8.6 2.1 3.4.5 5.9.8 9 1.2-4.1 1.2-8-.4-10.9 1.5 6.7 1.8 13.4 3.6 21.2 5.6zM193 410.5c-1 2.7-1.2 5.1-2.5 6.6-2.2 2.3-1.1 4 0 6.2 3.6 7.1 7 14.3 10.4 21.4.5 1 .8 2 1.2 3.1l.8-.2c-.5-3.7-1-7.3-1.5-11.4 1.1 1.3 1.9 2 3.2 3.5-2.2-10.7-5.5-20-11.6-29.2zm33.8 292.6q.4.3.8.7c1.5-.3 3.1-1 4.6-1 3.9.1 6.2-1.8 7.5-5.1 1.8-4.4 5.3-7.9 7.4-12.1.8-1.5 1.7-3 3.1-5.7-4.1 1.5-7.1 2.2-9.7 3.6-1.9 1.1-3.3 3.1-5.2 5h6.6q-.1.2-.1.4c-2.8.7-5.6 1.4-8.9 2.2-.6 1.9-.9 4-1.9 5.9-1.1 2.2-2.8 4.1-4.2 6.1zM400 509.3c-6.8 2.6-11.4 6.5-16.1 10.2-2.9 2.2-4.6 4.9-4.3 8.6 5.9-1.9 11.8-3.9 17.5-5.8 1-4.3 1.9-8.2 2.9-13zm-81.9-12q-.7.1-1.3.2c1.1 7.7 2.2 15.3 3.4 23 .4 2.4 1.1 4.8 1.6 7.3 4.8-1.8.9-5.2 1.9-7.6.9 1.1 1.7 2 2.8 3.4.5-1.4 1.3-2.3 1.1-2.9-2.5-8.1-5-16.2-9.5-23.4zM263.7 651c-4.4 1.8-7.6 3.3-10.9 4.3-3.9 1.2-3.4 5-5.8 7.6 2.4-.2 4-.3 6-.5-2.5 2.5-6.6 1.4-8.1 5.8 4.8-1 8.9-2 13.1-2.9 1.8-4.6 3.5-8.8 5.7-14.3zm-22 22.7c2.7 2.7-.4 2.7-.9 3.8-.7 1.3-1.5 2.5-2.6 4.5 3.2-.9 5.6-1.7 8-2.3 5.9-1.3 8.3-4.2 8.9-10.8-4.3 1.5-8.5 3.1-13.4 4.8zm160.9-201.3c-3.3 2.9-5.8 5.2-8.3 7.4-3.1 2.6-1.1 6-2.2 9.2 3.4-2.1 6.4-3.8 9.1-5.8.8-.6 1.6-2.9 1.4-3-1.8-1.4-1.2-2.3-.1-3.7.5-.6.1-1.9.1-4.1zM259.4 726.1c-2.3-.9-4.6-2.3-6.9-2.5-1.9-.1-3.9-3-6.2.3-.8 1.1-4.5.2-7.6.2 6.9 4.8 13.6 5.2 20.7 2zm25.3-289.6c-3.2 2.5-2.2 6.4-5.8 7.1 2.3 3 4.2 5.6 6.8 8.9.4-5.9.9-10.6-1-16zm109.7 40.1c2.6-1.9 4.8-3.4 6.9-5.1.6-.5 1.4-1.3 1.4-2.1 0-2.2-.2-4.5-.4-6.9-6.2 2.7-6.7 8.3-7.9 14.1zm-220 223.5l1-1.4c-4.8-6.6-12.4-9.5-18.9-13.9l-.8 1q9.4 7.2 18.7 14.3zm221.1-242q.4.1.9.3c1.3-4.1 2.6-8.3 4.2-13.2-3 .8-5.2 1.4-7.4 2 .9 4 1.6 7.4 2.3 10.9zM293 431.5c3.2 4.7 6.1 8.9 8.9 13.2.2-3-.5-5.6-1.1-8.2-.8-3.7-2.8-5.7-7.8-5zm-49.8 297.2c-6.5-5.4-13.3-1.6-19.4-2.8 5.9 2.7 12.2 3.2 19.4 2.8zm31-286.2c3.8-2.2 5.6-5 6-8.6-2.7 2-7.2 2.7-6 8.6zm-32.5 83.7c-5.2 3.1-5.2 3.1-3.8 7.9 1.2-2.6 2.4-4.9 3.8-7.9zm49.5-90.3c-1.2 1.7-4.3 2.5-2.7 6.4 1.4-2.5 3.6-3.6 2.7-6.4zm-3.3.2c2-2.8 2-2.8 0-4.9v4.9zM117 1011.9h-.4l.2 5.2h.2v-5.2zm104.4-293.1c-2.1-.4-3.6-.1-3.7 2.8 1.6-1.2 2.7-2 3.7-2.8zm-101.2 329.3q0-.1-.1-.2v2.7h.1v-2.5zm.9 11.1h.2v-2.8h-.3q.1 1.4.1 2.8z"
            />
            <Path
              id="&lt;Path&gt;"
              d="M293.4 479.1c3.7-4.6 7.2-9.2 12.6-12.1v1.3l-12.6 10.8zM93.5 872.7q.3-6.1.5-12.2h.2v12.2h-.7zM223.3 629.4c-1.4 1.2-2.6 2.5-4 3.5-9.1 6.1-17.2 13.1-23.9 21.8-.4.4-1.2.7-1.8 1 1-1.6 1.9-3.4 3.1-4.9 6-7.5 13.3-13.7 21.2-19 1.6-1.1 3.6-1.6 5.4-2.4zM195.7 632.5c5.6-5.8 11.2-11.7 16.9-17.4 2.4-2.4 5.3-4.3 7.9-6.4q.4.6.8 1.1c-4.2 3.7-8.6 7.3-12.7 11.1-4.2 3.9-8.3 8-12.4 12q-.3-.2-.5-.4z"
            />
            <Path
              id="&lt;Path&gt;"
              d="M180.7 654.6c0-.6-.2-1.2.1-1.6 4.2-7.4 8.6-14.6 14.9-20.5q.2.2.5.4l-15.6 21.6.1.1zM189.5 662q-3.9 7.8-7.8 15.5c1.3-5.8 3.6-11.1 7.8-15.5z"
            />
            <Path
              id="&lt;Path&gt;"
              d="M193.8 655.5q-2.3 3.4-4.5 6.8 2.2-3.4 4.5-6.8zM215 603q-1.6 1.5-3.3 3.1-.3-.3-.5-.6 1.5-1.5 3-3.1l.8.6zM177.3 661q1.7-3.2 3.3-6.5l.1.1c-2.3 1.6-3.3 3.8-3.2 6.5l-.2-.1zM181.8 677.3q-1.1 3.6-2.3 7.3c-.2-2.8.4-5.2 2.3-7.3zM209 628.1q.9-.7 1.7-1.3.3.2.5.5-.8.7-1.6 1.5-.3-.4-.6-.7zM218.9 620.8q-1 1.7-2 3.5-.8-.8-1.5-1.7 1.8-.9 3.6-1.7l-.1-.1zM216.7 600.2l3.6-2.4q.3.3.5.7-1.6 1.3-3.3 2.6-.4-.5-.8-.9zM172.9 621.7c2-4.5 5.4-7.7 9.6-10.3q-4.7 5.3-9.4 10.5zM175.1 612.1q2.8-3.4 5.6-6.7-2.8 3.3-5.6 6.7z"
            />
            <Path
              id="&lt;Path&gt;"
              d="M173.1 621.9l-3.4 4.2.1.1q1.5-2.3 3.1-4.5l.2.2zM171.9 617c0-2.5 1.3-4.1 3.4-5.1q-1.7 2.5-3.4 5.1zM248.8 572.8c-.3-.1-.9 0-1-.2l-10.6-18.4 11.6 18.6zM260.3 602.3q-2.3-6.6-4.5-13.3 2.2 6.7 4.5 13.3zM252.9 554.1q-1.7-3.2-3.3-6.4.3-.1.7-.3 1.7 3.1 3.3 6.3-.3.2-.7.4zM260.1 591.4l-2.2-4q.6-.2 1.1-.4.5 2.3 1 4.5l.1-.1zM255.9 589.2q-1.1-2.8-2.3-5.7 1.2 2.9 2.3 5.7zM195.8 516.5q2.3-1.9 4.6-3.7-2.3 1.8-4.6 3.7zM325.7 647.2c.1-1 .2-2.1.4-4 .3 1.9.4 3 .6 4.1-.4 0-.6 0-1-.1zM316.9 557.5l3.4 6.2-1.2.6q-1.1-3.5-2.1-6.9l-.1.1zM335.7 623.6v-3.1q.1 0 .3-.1l.4 3.2h-.7zM225.4 655.5c-2.2 1.8-4.4 3.7-6.6 5.5q-8.8 6.9-17.5 13.8c.1-.6 0-1.3.3-1.6 7.2-6.9 14.5-13.7 23.8-17.7zM179.7 695c.5-5.8 4.2-10.1 6.5-15q.6.3 1.1.5-3.9 7.2-7.7 14.4l.1.1zM197.6 678.5q-3.6 3.8-7.2 7.7c1.5-3.4 3.4-6.4 7.2-7.7zM214.3 653.7q.9-1.1 1.9-2.1l.6.4-2 2.2-.5-.5z"
            />
            <Path
              id="&lt;Path&gt;"
              d="M190.5 686q-1.7 2.6-3.4 5.1c.1-2.4 1.3-4 3.4-5.1zM170.8 594.7c1.4-2 2.5-4.4 4.3-6 4.3-4.1 8.8-7.8 13.3-11.7-2.1 2.2-4.1 4.4-6.2 6.5-3.8 3.7-7.6 7.5-11.4 11.2zM171.1 600.5l-.4-.4c4-3.7 7.9-7.3 12.5-11.6-4.5 4.4-8.3 8.2-12.1 12zM219.8 562.9q-2 1.7-4.1 3.3-.4-.5-.7-1.1 2.5-1 4.9-2.1l-.1-.1zM316.6 653.1v7.9q-.2.1-.4.1V653q.2 0 .4.1zM295.9 585.6q1.2 2.6 2.3 5.2-.3.2-.7.4l-2.6-5.2 1-.4zM315 648.8v-3.5q.2-.1.3-.1.2 1.7.4 3.5-.4 0-.7.1zM317.3 643.3v-5.7q.3.1.7.1l-.8 5.6h.1zM303.1 591.3q-.7-1.5-1.5-3 .3-.2.7-.3l1.4 3q-.3.2-.6.3zM178.9 564.1q4.2-3.3 8.4-6.7c-2.2 3.1-4.5 5.8-8.4 6.7zM178.4 575.1q.9-1 1.8-2.1.3.2.6.5-1 1-1.9 2.1-.2-.3-.5-.5zM186.7 563.8l-2.8 2.4q-.3-.2-.6-.5c.4-.5.8-1 1.3-1.4.5-.4 1.1-.7 1.7-1q.2.2.4.5zM293.4 660.7c.2 3.2.4 5.3.5 7.3q-.2 0-.5.1v-7.4zM280.9 620.7q1.6 2.1 3.2 4.3-.6.3-1.1.6l-2-5-.1.1zM298.8 671.6V667c.3 2.4.4 3.5.6 4.6h-.6zM299.3 684.5l-.2 3h-.3l-.2-3h.7zM194.8 510.7q3.6-3.4 7.2-6.7.5.5 1 1.1c-2.7 1.9-4.7 4.7-8.2 5.5v.1zM305.3 657.2v-4.1h.2q.1 2.1.2 4.1h-.4zM293.6 610.7q.7 1.6 1.3 3.1-.3.2-.6.3-.6-1.6-1.3-3.2l.6-.2zM343.7 576.4c1-2 0-3.4-1.7-4.5l1.8 4.4-.1.1zM212.6 686.1q-2.5 1.7-4.9 3.4 2.4-1.7 4.9-3.4zM218.1 681.7l-4.8 3.8c.7-2.3 2.4-3.5 4.8-3.8zM283.8 699c-.2-.8-.5-1.6-.6-2.5q-.1-1.3.6-2.5v5zM137.8 640c-1.9-1.8-3.9-3.6-6-5.5 3.2 1.1 3.2 1.1 6 5.5zM157.6 658.5c1 1 2 2 3.3 3.1-.7.2-1.1.5-1.2.4-1-1-2-1.9-3-2.9q.4-.3.9-.6zM154.4 646.8q2.5 2.8 5.1 5.6c-3-.7-4.1-3.1-5.1-5.6zM182.8 550.9l3.4-3.4.8 1-4 2.6c0 .1-.2-.2-.2-.2zM285.2 540.2l2.4-3.8.5-.5q1.4-.1 2.7-.1l-.1-.1q-2.8 2.2-5.5 4.5zM293 532.5q1.3-.1 2.6-.1-2.5 1.6-4.9 3.3l.1.1q1.1-1.7 2.2-3.3zM155.5 570.5q2.3 3.4 4.5 6.7-2.2-3.3-4.5-6.7z"
            />
            <Path
              id="&lt;Path&gt;"
              d="M159.9 577q1.9 2.8 3.9 5.6c-2.8-.8-3.3-3.2-3.9-5.6zM202.4 478.5c1.7-2.8 3.6-5.3 7-6.1q-3.5 3.1-7 6.1zM215.4 467.1q2.8-2.2 5.7-4.5-2.9 2.3-5.7 4.5zM210.7 470.4q2.5-1.7 4.9-3.4-2.4 1.7-4.9 3.4zM147.9 605.4q1.9 2.2 3.9 4.5-2-2.3-3.9-4.5zM144.6 601l3.4 4.6-3.4-4.6zM269.3 676.4v-3.1h.4q-.1 1.5-.3 3-.1 0-.1.1zM270.8 659.1v2.5h-.4q-.2-1.2-.3-2.5h.7zM135.1 585.8q-.9-.9-1.9-1.8l1.4-1.4q1 .9 1.9 1.8l-1.4 1.4zM163.8 561.9c-2.7-1-3.6-3.2-3.9-5.8q2 2.9 3.9 5.8zM314.6 443q3.3 2.8 6.7 5.6-3.4-2.8-6.7-5.6zM310.2 439.7q2.3 1.7 4.6 3.5-2.3-1.8-4.6-3.5zM244.9 717.2q1.7-3.3 3.3-6.6-1.6 3.3-3.3 6.6zM260.5 683.3q-.1-1.3-.2-2.5h.5v2.3q-.2.1-.3.2zM289.7 533.2q-.8 1.3-1.6 2.7l-.5.5q-1.4.2-2.8.5 2.4-1.9 4.9-3.7zM371.3 462.7l3.2 4.2q-.5.3-1.1.6-1-2.5-2-4.9l-.1.1zM262.8 461.5c-3.3 2.9-6.6 5.7-10 8.5-.4.4-1.3.2-1.9.3 3.5-3.5 6.7-7.5 11.9-8.8zM249.9 457.3q2.5-2 4.9-4c-.8 2.4-2.3 3.8-4.9 4zM255.4 452.9q2.5-1.7 4.9-3.4-2.4 1.7-4.9 3.4zM260.1 449.7q2.2-2 4.5-3.9c-.5 2.4-2.5 3.2-4.5 3.9zM282.1 571.6q-4.5 2.8-8.9 5.6c2.1-3.1 5.3-4.7 8.9-5.6zM356.5 632.9l-3.4 1q-.1-.3-.2-.7 1.5-.6 3.1-1.3.2.5.5 1zM258.1 477.8q-3.9 3.7-7.8 7.3c1.5-3.6 4.5-5.6 7.8-7.3zM246.6 488.8q-3 3.3-6.1 6.7c.9-3.3 2.8-5.7 6.1-6.7zM262.5 474.6l-4.6 3.4 4.6-3.4zM368.9 562.6q2-.8 4.1-1.6l.2 1q-2.2.3-4.4.5l.1.1zM246 449c2.2-4.8 6.3-7.4 11-9.3q-5.5 4.7-11 9.3z"
            />
            <Path
              id="&lt;Path&gt;"
              d="M256.8 439.9c1.3-2.4 3.4-3.3 5.9-3.4q-2.9 1.7-5.9 3.4zM310.4 484.6c-1.8-.3-2.6.9-2.7 2.7l2.6-2.8.1.1zM296 702.4q4.8 2.2 9.5 4.5-4.7-2.3-9.5-4.5zM277.5 460.4q2 2.3 4 4.5c-2.4-.5-3.3-2.4-4-4.5zM377.9 452.8q2.8 4.1 5.6 8.1c-1.1-3.2-1.5-7-5.7-8l.1-.1zM316.1 680h5.5q0 .4-.1.8-2.7-.4-5.4-.9c-.1 0 0 .1 0 .1zM394.1 499.8q2.8-1.7 5.7-3.4-2.9 1.7-5.7 3.4zM389.8 503.1q2.2-1.7 4.5-3.4-2.3 1.7-4.5 3.4z"
            />
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default Flower
