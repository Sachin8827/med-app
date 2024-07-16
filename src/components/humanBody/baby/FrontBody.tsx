const BabyFrontBody: React.FC<{ onclick: (e: any) => void, isPartSelected: (part: string) => boolean }> = ({ onclick, isPartSelected }) => {
    return <>
        <div style={{ position: 'relative' }}>
            <svg onClick={onclick} width={'100%'} height='100%' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 890 1884" xmlSpace="preserve">

                <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="446.333" y1="144.5768" x2="447.459" y2="-24.3631" gradientTransform="matrix(1 0 0 -1 0 1884)">
                    <stop offset="6.612840e-02" style={{ stopColor: "#076EB0", stopOpacity: "4.000000e-02" }} />
                    <stop offset="0.9688" style={{ stopColor: "#076EB0" }} />
                </linearGradient>
                <path className="st0" d="M446.8,1880c190.1,0,344.1-31.5,344.1-70.3c0-38.8-154.1-70.3-344.1-70.3c-190.1,0-344.1,31.5-344.1,70.3  C102.7,1848.5,256.7,1880,446.8,1880z" />
                <path className="st1" d="M73.4,1121.2c20.9,2,40.3-12.1,44.3-27.2c-1.1,1.1-2.2,2.3-3.3,3.5C105.5,1108.8,89,1116.9,73.4,1121.2z" />
                <path className="st1" d="M801.1,1115.2l-0.6-0.2c-10.5-5.7-19.7-12.7-27-20.9c4,15,23.3,29.2,44.3,27.2c-5.6-1.6-11-3.5-16.1-5.8  L801.1,1115.2z" />
                <path className="st1" d="M520.8,1526.3c16.9-8.6,23.1-27.4,11.4-40.5c3.4,6.8,3.6,14.2,0.7,21.1c-2.9,6.9-8.9,12.7-16.8,16.6  c-7.6,3.3-16.4,4.4-24.9,3.2c-8.4-1.2-16-4.5-21.7-9.4c-0.1-0.1-0.1-0.2-0.2-0.3l-0.1,0l0.2,0.1l0.1,0.1  C479.4,1531.3,504,1534.9,520.8,1526.3z" />
                <path className="st2" d="M392.2,1526.9c0.5-0.2,1.1-0.5,1.4-0.7c0.1,0,0.1-0.1,0.2-0.1l0.1,0l0,0c-0.1,0-0.5,0.2-1.2,0.4h0l-0.4,0.1  c-7.2,2.5-15.3,3.1-23,1.8c-7.7-1.4-14.7-4.7-19.7-9.4c-4.5-4.3-7.4-9.5-8.6-14.9c-1.1-5.5-0.4-11.1,2.1-16.2  c-11.6,13-5.2,31.9,11.4,40.5c16.6,8.7,41.8,5,51.4-9.3C402.1,1522.3,397.4,1525,392.2,1526.9z M369.3,1528.4l24.5-2.3l0,0  L369.3,1528.4z" />
                <path className="st1" d="M393.9,1526.1L393.9,1526.1L393.9,1526.1L393.9,1526.1C393.9,1526.1,393.9,1526.1,393.9,1526.1z" />
                <path className="st1" d="M447.3,1054c-4.6,1.3-4.1,7.8-3.5,10.7c2,10.6,8.7,0.8,8.4-0.2c5.9,12.5-13.9,16.9-15.6,2.6  C436.2,1061.7,440.1,1049.4,447.3,1054z" />
                <path className="st3" d="M73.4,1121.2c20.9,2,40.3-12.1,44.3-27.2c-1.1,1.1-2.2,2.3-3.3,3.5C105.5,1108.8,89,1116.9,73.4,1121.2z" />
                <path className="st3" d="M801.1,1115.2l-0.6-0.2c-10.5-5.7-19.7-12.7-27-20.9c4,15,23.3,29.2,44.3,27.2c-5.6-1.6-11-3.5-16.1-5.8  L801.1,1115.2z" />
                <path className="st4" d="M880.1,1128.7h-0.1c-12.7-6.1-22.3-15.6-31.8-25c-4.6-4.5-9.1-9-13.9-13c-7-5.9-14.9-11.6-25.3-13.4  c-1.2-0.2-3.1-0.2-5.1-0.2c-1.6,0-3.3,0-4.7-0.2c-1.4-0.1-2.6-0.4-3.2-0.8c-2.4-3.1-5-8.5-7.1-12.7c-13.6-28.6-21.1-53.7-28.3-83.4  c-1-3.8-1.8-7.6-2.7-11.4c-4.6-19.6-9.3-36.7-24.5-63.5c-18.5-27.9-18.7-40.8-21.5-61c-7.5-54.8-21-107.4-58.1-149.9  C628.3,664.7,546.3,653,518.5,651c-5.5-1.2-4.9-29.9-0.9-35.1c39.4-24,66-68.5,81.4-110.4c12.8-34.8-6.6-29-17.2-25.8  c-4,1.2-5.8,1.9-5,0c32.1-70.3,12.7-100.9,6.5-116.3c-43.6-80.1-123.5-90-165.7-85.1c-70.1,8.1-112.3,46.5-126.2,74.7  c-14.6,29.9-23.8,88.7,4.2,130.5c-31.1-10.7-24.5,12.8-21.5,22c7.4,22.2,19.2,41.9,32.3,61.2c11.9,17.6,24.4,32.7,44.8,47.1  c4.5,2-1.2,32-8.8,35.7c-4.8,3.4-9.5,4.1-25.2,6.5c-20.4,3.2-35.8,7.4-63.3,19.4c-18.4,8-51.7,25.5-69.9,58.5  c-14.6,26.5-18,44.8-22,66.6c-0.7,3.8-1.4,7.8-2.2,11.9c-3.1,15.8-4.2,29.1-5.1,40.4c-0.3,4.2-0.4,7.8-0.5,11.2  c-0.2,8.8-0.3,15.2-5.2,22.7c-5.6,7.7-10.5,15.6-13.2,20.4c-16.8,28.5-24.1,47.9-30.3,87.2c-9,46.6-13.6,66.9-37.8,85  c-2.5,1.5-5.3,3.1-8.1,4.7c-8.6,4.9-17.9,10.2-24.2,16.3c-4,3.9-6.6,8-9.2,12c-4,6.2-7.8,12-16,16.4l-0.2,0.1  c-3.4,1.8-7.2,3.9-7.2,7.4c-0.2,5.9,8.1,7.4,13.9,7.1c7.3-0.4,14.5-2.1,20.9-4.9c3.8-1.9,7.2-4.1,10.2-6.7c0.6-0.4,1.2-0.9,1.8-1.4  c2.3-1.9,5-4.1,7.8-4.8c-2.5,6.2-6,12.2-10.4,17.8c-4.8,7.1-9.8,14.1-15,21.1c-0.8,1.1-1.8,2.3-2.9,3.5c-4.2,5-9.4,11.1-6.4,16.4  c6.8,12,21.7-3.1,26.3-8c2.5-2.6,4.7-5.2,7-7.8c1.4-1.7,2.9-3.4,4.4-5c3.1-4.1,6.9-7.8,11.5-10.9c-0.5,4-1.7,8-3.7,11.7  c-1.9,4.6-4,9.1-6.2,13.5c-0.7,1.4-1.5,2.9-2.3,4.4c-2.8,5.2-6,11.2-6,16.6c0,1.2,0.2,2.4,0.5,3.6c0.2,1.1,0.8,2.1,1.7,3  c0.8,0.9,1.9,1.6,3.2,2.1c1.3,0.5,2.7,0.7,4.1,0.7c1.4,0,2.8-0.3,4.1-0.8c5.2-2.3,8.1-7.5,10.4-11.8c0.3-0.5,0.5-1,0.8-1.4  c3-5.3,5.5-10.7,8-16.1c2.6-5.5,5.1-10.9,8.1-16.2c0.4,5.7-0.4,11.3-1.1,17c-0.5,3.7-1,7.4-1.1,11.1l0,0.7c-0.2,4.6-0.5,11,3.9,14.5  c1,0.7,2.2,1.2,3.5,1.5c1.3,0.3,2.7,0.3,4,0.1c1.3-0.2,2.6-0.7,3.6-1.3c1-0.7,1.9-1.5,2.5-2.4c3.1-4.5,3.4-10.4,3.7-15.8  c0.1-1.6,0.2-3.1,0.3-4.5l0.2-1.6c0.5-4.4,1.1-8.8,1.9-13.1c0.1-0.4,0.1-0.9,0.2-1.4c0.3-2.7,0.8-7.2,3.2-8.2  c2.5,1.9,1.4,7.8,0.7,11.5c-0.2,0.9-0.3,1.6-0.4,2.2c-1,5.5-1.2,11-0.5,16.5c0.9,4.9,6.4,11.3,13.4,6.8c4.5-2.9,5.7-8.6,6.3-12.9  c0.4-2.7,0.6-5.4,0.7-8.2c0.1-2.1,0.2-4.2,0.5-6.3c0.4-3.6,0.9-7.2,1.4-10.9c0.4-3.1,0.9-6.2,1.2-9.4c0.6-3.1,1.8-6,3.5-8.9  c2.6-5.3,5-10.7,7-16.2c2.3-5.5,3.7-11.2,4-17c0-2.1,0-4-0.1-5.8c-0.2-4.6-0.3-8,1.5-11.4c5.4-10,10.6-20,15.9-30.1  c9.7-18.6,19.4-37.2,30-55.4c8.6-14.8,18.2-31.2,21-41.9c0.4-1.6,1-4.1,1.8-7.3c2.7-11.2,7.2-30,11.8-41.4  c7-17.4,30.3-63.3,34.4-63.3c4.1,0,4.3,31.6,4.3,31.6c0,30-1.5,42.6-3.2,57.1c-0.8,6.7-1.6,13.8-2.4,23.3c-1.7,20.5-2.5,34.8-4,61.8  c-0.4,7-0.8,14.9-1.4,23.9c0,75.7-9.8,112.5-17.1,139.8c-5.2,19.3-9.1,33.9-7.3,54.2c5.8,70.5,35.1,169.5,60.6,223.4  c1.5,3.3,1.2,6.3,0.7,10.6c-1.1,9.3-2.7,24.1,14.1,58.4c3.2,9.3,0.7,18.4-2.1,29c-0.4,1.4-0.8,2.8-1.1,4.3  c-4.8,16.5-7,27.3-4.8,41.1c3.6,23,6.2,33.1,9.4,43.6c7.1,23.3,12,39.2,14,69.9c0.3,4.8,0.6,9.9,0.6,15.1c0,2.4-0.1,4.8-0.2,7.1  c-0.8,15.8-4.3,30.8-14.5,37.5c-4.5,2.9-6.3,4.1-8.4,6.8c-2.8,4.9,2.3,8.9,7.8,10.9c15,4.1,28.1,3.7,43.4,4.5  c11.6,0.1,29.8,2.1,37.2-1.4c3.6,4.4,9.7,7,15.2,7.7c16.7,1.4,24.6-0.2,29.9-10.8c5.6,9.8,15.4,10.9,22.1,11  c10.1,0.2,22.1-2.2,25.2-8.1c14,6.5,42.5,1.5,61-1.2c4.7-0.8,10.6-1.4,15.5-2.8c4.9-1.4,8.9-3.6,9.6-7.3c1.3-5-5.4-8.5-11.1-11.7  c-11.7-6.3-19.1-16.3-27.5-26.1c-3.3-5-4.6-7.9-4.8-10.6c-0.1-1.9,0.2-3.8,0.7-6.2c2.2-11.5,3.5-19.5,7.3-30.9  c5.7-17.2,10.4-33.2,13-52.7c2.6-14.4,4.3-31,7-45.1c3.2-16.5,2.5-20.2,0-31.8c-4.7-21.8-10.1-24.5,1.4-63.7  c7.5-20.6-2.8-33.7,3.5-45.5c6.4-11.8,35.3-96.3,42.1-118.9c22.5-91.4,26.7-126.2,5.4-185.1c-5.8-14-5.4-28.1-5-42.8  c0.1-4,0.2-8.1,0.2-12.1c0-27.4-2.7-42.5-5.2-56.3c-4.3-24-4.1-41.9-3.9-62.9c0.1-6.9,0.2-14.2,0.1-22.1c0-6.2-0.6-13.7-1.2-20.9  c-0.4-4.9-0.8-9.8-1-14c-0.2-3.6-0.5-7.7-0.8-12c-0.5-6.2-1-12.6-1-17.9c-2.2-41-0.6-63.2,2.1-63.2c3.9-1,11.9,17.7,26.2,53.2  c6.8,17,10.8,34.6,16.4,52c10.4,32.8,25.4,62.9,45.1,91.8c14.6,21.4,36.5,37.7,48.6,60.8c0.4,1.5-0.2,2.8-0.8,4.3  c-0.4,0.9-0.7,1.8-0.9,2.8c-0.5,3.3-0.3,6.7,0.5,10c2.8,10.6,6.9,21,12.3,31c1.5,4.2,2.3,8.6,2.4,13c0.2,1.2,0.3,2.5,0.5,3.7v0  c0.8,5.2,1.5,10.4,1.7,15.6c-0.2,5.1,0.8,10.3,3,15.2c2.8,5.4,11.4,9,15.7,2.1c3.1-5,2.2-12,1.5-17.6h0v0l-0.1-0.9  c-0.4-2.9-0.8-5.8-1-8.7c0-0.4-0.1-0.9-0.1-1.5c-0.2-1.9-0.5-4.6,0.8-5.6c2.5,0.8,3.1,5.6,3.5,8.3c0.1,0.5,0.1,0.9,0.2,1.2  c0.8,4.4,1.4,8.8,1.9,13.2l0.2,1.5c0.2,1.6,0.3,3.3,0.4,5.1c0.3,5.3,0.6,11,3.6,15.3c0.5,0.9,1.3,1.7,2.3,2.3c1,0.6,2.2,1.1,3.4,1.3  c1.2,0.2,2.5,0.3,3.8,0.1c1.3-0.2,2.5-0.6,3.5-1.2c4.9-3.2,4.6-9.8,4.5-14.3l0-0.5c-0.1-4-0.7-7.9-1.2-11.9  c-0.6-4.6-1.2-9.2-1.2-13.8c0-1.1,0-2.1,0.1-3.2c2.8,5.1,5.2,10.3,7.7,15.5c2.7,5.7,5.3,11.4,8.5,16.8c0.1,0.2,0.2,0.4,0.4,0.6  c0,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.4,0.3,0.6c2.4,4.4,5.4,9.9,10.9,11.9c1.3,0.4,2.7,0.6,4.1,0.5c1.4-0.1,2.8-0.4,4-1  c1.2-0.6,2.2-1.3,3-2.2c0.8-0.9,1.2-2,1.4-3.1c1.6-6.3-2.3-13.6-5.8-20c-0.9-1.7-1.8-3.2-2.5-4.8c-0.8-1.6-1.7-3.3-2.6-5.1  c-3.3-6.2-7-13.3-7-19.6c6.3,3.6,11,9.6,15.4,15.1c1.5,1.9,3,3.8,4.5,5.5c0.1,0.1,0.2,0.2,0.3,0.3c0.1,0.1,0.2,0.2,0.3,0.4  c0.2,0.2,0.4,0.5,0.6,0.8c5.2,6.1,15.4,18.2,24.9,12.8c8.4-4.8,1.6-13.1-3-18.9l0,0c-0.6-0.7-1.1-1.4-1.6-2  c-5-6.5-9.8-13.2-14.3-19.9c-1-1.4-2-2.9-3.1-4.4c-3.8-5.3-7.8-10.8-9.4-16.5c4.1,0.8,7.7,3.8,11.1,6.8c2.1,1.8,4.2,3.6,6.3,4.7  c5.8,3,12.4,5,19.3,5.7c5,0.6,10.8,1.2,14.9-1.5C890.5,1137,885.9,1131.5,880.1,1128.7z M436.3,1429.7c-3-20.5-4.2-26.7-8-36.7  c-1.2-1.5-1.7-3.6,0-4.7c2.5-1.5,7.2-4.2,7.8-10.5c0,6.4,4.3,9.3,6.5,10.5c1.9,1,1,1.2,0,4.7  C440.6,1400.7,436.3,1429.7,436.3,1429.7z M435.8,1555.7c-3.1-12.5-1.3-31.8,0-39.9C439.5,1535,437.3,1550.4,435.8,1555.7z   M436.9,1758.2c-3.8,0-6.8-6.4-6.8-10.5c0-3.4,1.2-3.8,2.8-8.3c2.3-6.3,1.2-10.8,1.2-22.4c0-5.1-1.4-25.1,2.7-34.6  c4.3,5.2,4.8,24.7,4.3,34.6c-0.6,10.9-0.2,20.2,0.5,22.4c1.2,3.6,2.6,5.3,2.6,8.3C444.3,1752.5,440.9,1758.2,436.9,1758.2z" />
                <path id="frontHead" className={isPartSelected('frontHead') ? "st2" : 'st3'} d="M434.4,633.4c27.1-1.8,76.1-14.1,101-38.5c9.6-9.5,11.8-24.2,15.7-36.6c1.6-5.1,4.8-12.3,9.4-18.9  c3.6-4.2-0.2,5.5-0.8,10.9c-1.5,8-2.3,17.7,0,14.4c18.1-21.3,40.1-69.8,36.6-77.1c-3.1-6.4-15.7-0.7-22.6,3.8  c-5.2,3.4-10,8.1-10,4.3c0,0-1.1-1.7,14.9-40.8c29.2-71.4-28.2-128.7-46-138.6c-71.5-47.7-155.4-39.5-215.7,14.8  c-34.5,31-39.9,102.9-21.2,139.1c3.7,7.2,6.9,13.1,10.4,24.1c3,9.6,1.8,7.9-3.1,3.3c-6.4-6-22.2-16.1-24.6-7.2  c-1.9,19.9,28.9,66.8,32.9,72.5c1.7-1,1.3-8.8-0.9-24.6c4.3,1.1,7.8,13.5,11.8,34.8C339.4,610.8,408.2,633.4,434.4,633.4z" />
                <path id="rightFrontCalf" className={isPartSelected('rightFrontCalf') ? "st2" : 'st3'} d="M433.4,1623.1c0.1-9.8,0.2-12.3-2.2-16.4c-2.4-4.1-61.7-1.7-83-2c-5.1,0-23-2.1-26.9,2.9  c-6.8,2.2,5.5,48.5,10.2,61.5c6.4,22.7,8.9,43.5,8.9,66.6c0,15.6,0.8,36.3-17.6,49.4c-1.9,0.9-5.6,3.3-5.3,5.8  c0.5,4.1,11,4.8,17.4,5.3c17,1.5,34.2,2,51.3,2.4h0c6.2,0.2,13-0.8,14.2-7.8c0.4-2.1,0.8-4.3,2.2-5.8c0.4-0.4,1-0.8,1.7-1  c0.7-0.2,1.4-0.3,2.1-0.2c0.7,0.1,1.4,0.3,1.9,0.7c0.6,0.4,1,0.8,1.2,1.4c-4.6-0.4-5,7.2-5.3,9.3c-0.5,4,0.7,5.1,3.1,6.8  c6.7,3.4,17.4,3.9,24.3,1.4c7.5-3.2,1.2-7.2,0.6-14.3c0,0-2.3-20.3-3.7-26.2c-2.5-9.8-10.7-19.5-15.9-25.7c-2.9-3.5-4.9-5.8-4.4-6.4  c0.5-0.7,2.1,0.6,4.2,2.3c3.4,2.7,8,6.6,11.7,4.9c6.7-3,5-19.7,4.3-26.9c-0.1-0.8-0.2-1.5-0.2-2c-0.1-0.6-0.1-1.3-0.2-2  c-0.7-7.9,0.4-24.7,3.3-38.6C435.2,1649.2,433.2,1639.4,433.4,1623.1z" />
                <path id="rightfrontShoulder" className={isPartSelected('rightfrontShoulder') ? "st2" : 'st3'} d="M267.4,695.1c0,1.5,0,3.1,0,4.6c0,6.8-0.1,12.7-0.2,18c-0.3,18.3-0.5,31.4,3.4,62c1,7.6,2.9,23.4,2.9,38.6  c0,8.8-22,3.8-63.6-10.4c-22.9-7.9-37.6-11.5-36.3-20.8c6.4-44.8,29.6-78.2,70.1-100.2c6.9-3.8,22.4-10.3,23-8.7  C267.3,680.5,267.4,687.5,267.4,695.1z" />
                <path id='rightBicep' className={isPartSelected('rightBicep') ? "st2" : 'st3'} d="M171.4,801.5c-2.4,1.1-2.8,6.3-5.6,20c-3.5,17-3.8,28.5-4,37.6c-0.1,5.2-0.3,9.6-0.9,13.8  c-2,12.6-5.6,18-10.1,24.6c-0.5,0.7-1,1.5-1.5,2.3c-0.6,0.9-1.2,1.8-1.8,2.7c-3.8,5.6-8.4,12.4-11.4,21.4  c-4.2,12.2,77.7,40.7,81.9,32.5c3.1-2.8,5.5-12.2,8.2-22.8c1-4.1,2.1-8.5,3.3-12.7c5.6-19.6,18.9-43,29.6-62c1.2-2.1,2.3-4.1,3.4-6  c5.4-9.6,9.1-16.9,9.1-20.4c0-1.8-4-2.7-12.8-4.7c-8.7-2-22.2-5-41.1-11c-14.9-4.7-21.5-7.2-26.3-9c-2.4-0.9-4.3-1.6-6.6-2.4  C176.9,802.8,173.4,800.6,171.4,801.5z" />
                <path id='rightForearm' className={isPartSelected('rightForearm') ? "st2" : 'st3'} d="M195.1,961.3c-2.1-0.5-4.2-1.1-6.4-1.7c-14.6-4.3-32.6-10.5-45.6-18.6l0,0c-0.4-0.2-0.8-0.5-1.2-0.7  c-8.5-5.3-12.5-7.9-18.4,10.3c-2.3,7.2-4.2,13.9-5.9,22.6c-0.5,2.8-1.1,5.6-1.6,8.2c-7.4,38.6-10.2,53.6-24.2,78.2  c-3.7,6.5,4.4,9.6,15.5,13.9c6.4,2.5,13.8,5.3,20.5,9.4c0.4,0.2,0.8,0.5,1.2,0.7c6.3,3.9,12.4,7.6,20.2,5.8  c5.3-2.6,11.7-16.2,22.2-38.9c14.3-31,24.3-48.3,30.6-59.3c4.8-8.4,7.5-13,8.3-17.2C212.6,965.9,205.1,963.9,195.1,961.3z" />
                <path id='rightPalmFront' className={isPartSelected('rightPalmFront') ? "st2" : 'st3'} d="M150.7,1108.9c1.1-5.4,2.1-10.4-6.2-12.4c-7.7-1.9-15.9-6.3-24.2-10.7c-10-5.4-20.1-10.8-29.7-11.8  c-6.6-0.8-11.5,3.6-16.5,8.1c-5.6,5.1-11.6,8.4-18.5,11.5c-5.9,2.6-11.6,5.2-16,9.4c-4.1,3.6-6.7,8-9.2,12.2  c-3.2,5.3-6.2,10.5-12,13.8c-5.5,3.1-16,9-5.4,10c7.5,0.2,14.9-1.3,21.4-4.3c3.1-1.4,5.9-3.7,8.7-6c4-3.3,8.1-6.6,13.3-7.4  c6.7-1,7,3.1,5.6,6.7c-4.1,8.8-9.2,17.2-15.5,25.1c-4.2,5.9-8.4,11.8-12.9,17.5c-1.5,1.9-11.4,14.9-1.9,13.5c3.3-0.5,6-3.3,8.3-5.8  h0c0.4-0.4,0.8-0.8,1.2-1.2c2.5-2.5,4.9-5.1,7.2-7.8c5-6.3,10.6-12.3,16.8-17.9c2.2-1.8,6-4.9,9.6-3.3c6.1,2.7,0.5,13.9-2,18.9  c-0.4,0.8-0.7,1.4-0.9,1.8c-0.2,0.4-0.7,1.4-1.4,2.7c-4.4,8.5-16.8,32.1-7.7,32.6c4.8,0.3,8.8-8,11-12.6c0.4-0.9,0.8-1.6,1.1-2.2  c2.7-4.7,4.9-9.6,7.2-14.5h0c1.1-2.3,2.1-4.6,3.2-6.9c0.2-0.4,0.4-1,0.7-1.8c1.7-4.2,5.1-12.9,10.4-11.1c3,1,3.3,4.4,3.3,6.5  c0.2,6.5-0.2,13.1-1.2,19.6c-0.6,4.1-0.9,8.1-1,12.2c-0.4,2.7,0.2,5.5,1.6,8c5.8,6.6,8.3-11.2,8.3-12.7c0.3-3,0.8-6.1,1.3-9.2  c0.3-2,0.6-4,0.9-6c0.1-0.9,0.2-1.8,0.3-2.7c0.5-4.9,1.2-10.7,4.8-14.4c4.4-4.5,10.1-0.9,11,3.6c0.8,4,0.2,8.2-0.5,12.3  c-0.4,2.7-0.8,5.4-0.8,8.1c0,0.1,0,0.1,0,0.2l0,0.2v0c-0.1,3-0.4,13.8,4.9,11.2c2.6-1.3,3.4-5.8,3.9-8.4v0c0-0.3,0.1-0.5,0.1-0.7  c0.5-2.2,0.6-4.5,0.7-6.8c0-1.2,0.1-2.5,0.2-3.8c0.4-5.3,1.2-10.5,1.9-15.7c0.4-2.8,0.8-5.5,1.1-8.3c0.1-2.4,0.8-4.8,2-7.1l0.2-0.5  c5.4-10.4,8.4-16.9,10.6-29.4C150.3,1110.5,150.5,1109.7,150.7,1108.9z" />
                <path id='leftPalmFront' className={isPartSelected('leftPalmFront') ? "st2" : 'st3'} d="M861.7,1136.9c5.2,1.7,10.8,2.4,16.4,2.1c9.7-1.4-2.8-7.5-5-8.6c-6.5-4-12.4-8.5-17.6-13.5  c-3.5-3.1-6.9-6.4-10.2-9.7l0,0h0h0h0l0,0h0c-7.5-7.3-15-14.6-24.2-20.4c-5.1-3-11.2-5-17.5-5.5c-18.1-1.7-42.2,7.6-57.6,13.9  c-10.3,4.3-7.5,14.4-5.2,21.8c1.8,5.7,4.3,11.1,6.9,16.5h0h0c1.5,3.2,3.1,6.4,4.4,9.7c0.8,2.6,1.2,5.2,1.3,7.9  c0.1,0.8,0.2,1.5,0.3,2.3c0.1,0.9,0.3,1.8,0.4,2.7c0.8,5.4,1.5,10.9,2,16.3c0.1,1.3,0.2,2.7,0.2,4v0c0.2,4.6,0.4,9.4,3,13.6  c3.9,6.3,6.4-1.5,6.4-4.7c0.1-4.8-0.2-9.7-0.9-14.5l0-0.2c0-0.1,0-0.2-0.1-0.4c0-0.1,0-0.2,0-0.3l0-0.1l-0.1-0.5l0-0.2  c-0.7-4.5-1.8-11.8,3-14.3c10.6-5.6,12.8,15.5,13.3,21l0.1,0.5c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0.5,4,1,7.9,1.5,11.9  c0,0.1,0,0.4,0.1,0.6l0,0c0.3,3.4,1.4,16.3,7.4,12.9c3.7-2.1,2.8-9.5,2.3-13.4h0c-0.1-0.6-0.1-1.1-0.2-1.4c-0.2-2.6-0.5-5.2-0.9-7.8  l0,0l0,0l0,0l0,0l0,0c-0.5-3.8-0.9-7.6-1.1-11.5c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1,0-0.2c0-0.2,0-0.4-0.1-0.6c-0.3-3.7-1.1-12.4,5-12.2  c4.5,0.1,7.1,7,8.7,10.9c0.3,0.9,0.6,1.7,0.9,2.2c1.1,2.3,2.1,4.6,3.2,6.9l0,0c1.9,4.3,3.8,8.5,6.1,12.6c2.2,5.2,5.3,10.1,9.4,14.6  c5.7,5.1,7.9-1.7,7-5.7c-1.4-4.7-3.4-9.4-5.8-13.8l-0.8-1.7h0l0,0c-2.8-5.7-5.6-11.5-7.9-17.4c-1.7-3.5-2.7-7.1-3-10.8  c0-5.7,5.6-5.8,10.3-2.5c6.7,4.8,11.8,10.9,16.8,17c3.2,3.8,6.3,7.6,9.9,11.1c2.3,2.2,13.5,10.8,12.7,2.2c-0.3-2.9-2.6-5.7-4.8-8.3  c-0.6-0.7-1.2-1.4-1.7-2.1c-10.1-12.4-19-25.3-26.4-38.8c-1.5-2.2-2.3-4.6-2.4-7c1.2-6.4,11.3-1.1,14.3,1c1.5,1,2.9,2,4.2,3  C850.4,1131.7,854.9,1135.1,861.7,1136.9z" />
                <path id='leftForearm' className={isPartSelected('leftForearm') ? "st2" : 'st3'} d="M692.5,1031.8c-12.9-20.3-21.7-30.3-33.7-62.1c-1.4-4.7,80.9-33.4,82.9-29.9c4.7,8.3,7.8,29.3,10.8,38.3  c11.3,43.4,15.4,57.4,38.5,97.9c-18.1,2.8-37.1,10-52.9,17.4C728.6,1072.7,716.5,1063.3,692.5,1031.8z" />
                <path id='leftBicep' className={isPartSelected('leftBicep') ? "st2" : 'st3'} d="M654.5,957.7c-2.5-2.3-6.5-13.5-11.2-30.7c-8.4-31.1-19.5-64.1-36.6-91.7c-3.6-5.9,8-3.8,46.9-15.6  c39-11.8,44-17.9,45.8-11.1c4.1,15,7,32,8.2,47.6c5.8,41,30.8,60.2,29.9,70.8C737.7,933.9,657.7,960.6,654.5,957.7z" />
                <path id='leftFrontShoulder' className={isPartSelected('leftFrontShoulder') ? "st2" : 'st3'} d="M694.7,797.5c-8.6,9-80.7,28.9-90.9,26.5c-5.3,0,2.5-27.5,3.6-82.9c0.4-19.9-0.9-52.9,2-60.6  c0-4.8,17.7,1.2,25.7,6.3c18.8,12.2,34.8,35.9,42.5,52.2C686.6,758,698.2,793.8,694.7,797.5z" />
                <path id='chest' className={isPartSelected('chest') ? "st2" : 'st3'} d="M550.7,855.9c10.9-5.8,40.3-21.4,42.9-37.5c1.1-5.2,7.3-55.7,2-55.1c-2.3,0.2-4.6,0.5-6.8,0.7  c-53.4,5.6-100.1,10.4-148.1,10.2c-42.8-0.2-84.2-4.2-134.1-9c-8.9-0.9-18.1-1.7-27.6-2.6c-4.2-0.4-3.1,7.6-2.2,14.2  c0.2,1.6,0.4,3.1,0.6,4.4c0.3,3.2,0.6,6.3,0.9,9.4c0.9,9.3,1.7,18.1,2.8,27.8c1.6,15.7,35,34.5,44.7,38.1c-8.8,0-20.3-2.8-35-13.3  c-2.2-1.8-4-3.5-5.4-4.8c-3.2-3.1-4-3.8-3.3,1.3l1.8,39.8c0.2,8.7,0,16.5-0.2,23.5c-0.2,10.5-0.5,19.5,0.6,27.6  c4.1,30.6,79.5,68.4,155.1,68.4c51,0,137.7-20.4,151.1-68.4c1-4.6,1.1-7.4,0.5-19c-2.7-38.6-1.5-59-1-67.7c0.3-5.2,0.4-6.3-0.8-4.7  c-12.1,10.2-24,14.2-39.5,17.4C550,856.3,550.3,856.1,550.7,855.9z" />
                <path id='neck' className={isPartSelected('neck') ? "st2" : 'st3'} d="M598.6,676.6c0,2.7,1.4,65.7,0,72.5c0,11.4-107.2,17.4-157.9,17.4c-35.4,0-163.1-7.2-164.9-14.8  c-1.6-6.3-1.5-13.9-1.5-26.1c0-2.5,0-5.2,0-8.1c0-2.9-0.1-6.4-0.2-10.3c-0.3-12.7-0.8-28.4,1.9-31.7c2.4-2.9,11.3-6.6,24.2-9.2  c34.5-7,48.4-10.2,90.5-8.8c-12.9-6.8-39.5-6.4-39.5-6.4c7.7-10,9.3-24.8,9.3-31.5c0-3.2,12.6,4.4,20.5,8  c12.8,5.9,33.8,12.6,53.4,12.6c14.3,0,37-5.7,48.8-10.3c12.9-5,26.6-11.8,25.1-8.1c-2.7,13.5-1.2,24.7,1.5,29.2  c-26.4,1.1-38.4,6.4-38.4,6.4c7.6-0.5,32.1-1.1,61.5,2.5C565.6,664,598.6,671.5,598.6,676.6z" />
                <path id='core' className={isPartSelected('core') ? "st2" : 'st3'} d="M286.1,948.2c29.8,33.3,87.9,56.5,153.3,57.8c52.3,1.1,119.6-18.2,147-54.5c6.1-8,6.2-6.6,6.9,2.5  c0.1,1.1,0.2,2.3,0.3,3.7c0.7,7.6,0.4,18.2,0.1,29.1c-0.2,9.1-0.4,18.4-0.1,26.3c1,26.3,2.3,33.1,4.8,46c1.1,6,2.6,13.3,4.3,24.6  c1.4,9.3-13.4,32.7-43.6,55.9c-25.5,19.6-65.8,38.9-68.6,33.4c-8.7-17.2-23.1-35-55.3-35.6c-23,0-44.9,15.3-52.2,32.3  c-1.8,4.1-21.2-2.2-47.1-16.8c-22.6-12.8-55.3-38.9-61.5-60.5c-3.7-24.2-0.3-68.6,2.1-100.3c0.3-3.7,0.6-7.3,0.8-10.6  c0.6-6.1,1-11.8,1.3-16.7c0.3-4.5,0.6-8.4,0.9-11.3C280.1,950.1,282.7,944.4,286.1,948.2z" />
                <path id='leftThigh' className={isPartSelected('leftThigh') ? "st2" : 'st3'} d="M439.3,1255.4c24.8-0.8,63.2-25.1,54.5-72.1c3.3-2.1,8.4-4.4,14.8-7.2c21.3-9.3,57-24.9,87.7-64.4  c4-6.7,6-9.7,6.4-5v30.8c0,9.4,2.9,18.2,5.9,27.5c1.2,3.8,2.5,7.7,3.6,11.8c12.5,45.1,8,97-6.3,140.8c-4.2,13-163.4,13.3-164.3,7.6  C438.3,1321.9,438.3,1255.8,439.3,1255.4z" />
                <path id='leftKnee' className={isPartSelected('leftKnee') ? "st2" : 'st3'} d="M466.7,1334.5c18.4,0.6,44.4,1.6,69.1,0.9c20.2-0.6,35.3-2.3,46-3.5c16-1.8,22-2.5,19.9,3.5  c-9.8,41.7-20.3,72.6-34.9,110.2c-6.4,16.7-13.4,18.5-9.8,41.4c2.4,15.9-6,33.1-8.7,48.8c-5.6,25.6,13.8,47.7,4,57.8  c-11.4,4.2-112.1,7.7-112.1-2.1c-3.2-6.3,0.6-28.9,1.4-34.1c2.2-13.6,1.8-27.9,0-41.5c-2.6-20-2.5-34.6-2.5-54.6  c1.5-25.9,9.6-59.4,23.4-92c-4.3,5.7-16,15.9-19.9,7.6c-3-8.3-3.7-37.9-0.8-42.5C442.9,1333.6,452.5,1334,466.7,1334.5z" />
                <path id='rightThigh' className={isPartSelected('rightThigh') ? "st2" : 'st3'} d="M376.3,1197.2c0,13,4.4,33.9,29.4,48.8c8.2,4.3,12.6,6.6,24.3,9.4c1.4,0,4,69.3,0,69.9  c-55.9,7.8-123.3,5.2-160.4-0.7c-6.4-1-15.7-58-18.7-87.5c-1.7-16.4,1.2-31.7,5.6-47.7c7-25.5,11.4-47.6,14.7-80.6  c0-0.5,0.1-0.9,0.1-1.4c0.3-3.3,0.5-6.1,3.6,0c11.3,18.2,27.8,35.4,70.1,57c2.4,1.2,6.1,2.8,10.2,4.6c10.7,4.6,23.9,10.3,22.9,13.3  c0,0.7-0.3,2.1-0.7,3.8C377,1189.4,376.1,1193.8,376.3,1197.2z" />
                <path id="rightFrontCalf" className={isPartSelected('rightFrontCalf') ? "st2" : 'st3'} d="M441.7,1606.7c1.6-2.7,16.9-0.7,58.5-0.7c31.2,0,52.1-5.7,52.1,0.7c0,20.9-5,42.6-8.7,63  c-2.4,13.6-22.4,67.5-16.9,78.3c10.9,16.6,22.9,29.5,41.2,38c7.8,4.8-6.7,7.1-11.1,7.7c-19.8,2.8-42.4,6.9-59.7,3.4  c-4.9-1.4-4.2-4.9-6.3-8.6c-1.6-2.8-3.6-4.7-5.6-5.7c-7.3-3.5-2.5,1.1,0,6.7c1.4,3.1,1.9,8.1-0.5,10.9c-6,5.2-20.5,4.8-28.7,1.1  c-5-2.3-16.1-14.4-14.7-30.9c0.2-4.7,6.7-17.8,12.9-28.7c6.3-11.2,11-19.7,4.6-12.8c-14.7,15.7-13.7,3-12.7-10.8  c2.3-22.1-1.5-33-4.4-49.7c-2.8-16.2-1.2-29.1-1.4-45.4C440.2,1616.8,438.7,1611.9,441.7,1606.7z" />
                <path id='rightKnee' className={isPartSelected('rightKnee') ? "st2" : 'st3'} d="M428.9,1379.2c3.9-8.8,5.9-26.9,1.9-44.9c-0.3-0.9-3-0.7-9.9,0c-11,1.1-32.5,3.2-71.4,3.2  c-34,0-58.2-2.6-70.2-3.9c-5.7-0.6-8.7-0.9-8.7-0.6c-4.8,1.2,16.3,80.6,36.2,121.7c5.3,10,4.8,15.8,4.2,21.8  c-0.2,2.1-0.4,4.2-0.4,6.5c0.3,15,4.5,25.6,8.4,35.4c8.6,21.5,9.7,25.7,1.7,51.5c-2.8,9-5.5,17.7-4.1,23.7c0,4.6,14,4.5,37.5,4.2  c5.7-0.1,12-0.1,18.8-0.1c2.1,0,4.7,0,7.7,0c18.7,0.1,51.4,0.2,51.4-7.2c0.7-12.1,0.4-18.6-0.9-26.6c-1.3-7.5-2.7-17.6-2.7-24.9  c1.5-30.7,4.4-27.6,4.4-77.6c0-34.3-11.8-64.6-23-92c-0.6-1.4,0.6,1.4,0,0C409.9,1369.2,424.4,1387.7,428.9,1379.2z" />
                <path id='testicle' className={isPartSelected('testicle') ? "st2" : 'st3'} d="M486.9,1203.4c-3,21.2-19.2,44.3-48.6,47.1c-23.6,2.3-50.7-20.2-53.9-47.1c-2.8-17.3,7.4-58.5,50.8-61.7  C467.3,1141.7,491.4,1171.9,486.9,1203.4z" />
                <path className="st4" d="M447.3,1054c-4.6,1.3-4.1,7.8-3.5,10.7c2,10.6,8.7,0.8,8.4-0.2c5.9,12.5-13.9,16.9-15.6,2.6  C436.2,1061.7,440.1,1049.4,447.3,1054z" />
                <path className="st4" d="M405.9,1519c-9.6,14.3-34.8,18-51.4,9.3c-16.6-8.7-23.1-27.5-11.4-40.5C336.9,1520.2,382.2,1536,405.9,1519z" />
                <path className="st4" d="M469,1519c9.6,14.3,34.8,18,51.4,9.3c16.6-8.7,23.1-27.5,11.4-40.5C538.1,1520.2,496,1536.2,469,1519z" />
            </svg>
            <svg style={{ position: 'absolute', bottom: 0, left: 0 }} width="100%" height="41" viewBox="0 0 193 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M96.5 40C149.243 40 192 31.2696 192 20.5C192 9.73045 149.243 1 96.5 1C43.7568 1 1 9.73045 1 20.5C1 31.2696 43.7568 40 96.5 40Z" stroke="url(#paint0_linear_275_43706)" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="6 6" />
                <defs>
                    <linearGradient id="paint0_linear_275_43706" x1="96.5" y1="1" x2="96.8125" y2="47.8688" gradientUnits="userSpaceOnUse">
                        <stop offset="0.0661284" stop-color="#076EB0" stop-opacity="0.04" />
                        <stop offset="0.968791" stop-color="#076EB0" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </>
}
export default BabyFrontBody;