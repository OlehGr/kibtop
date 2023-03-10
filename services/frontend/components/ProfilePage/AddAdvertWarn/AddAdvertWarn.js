import Link from "next/link";
import Text from "../../Elementes/Text/Text";

const AddAdvertWarn = ({title}) => {
    return (
        <div className="add-greeting">
            <svg className="add-greeting__img" viewBox="0 0 159 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M66.07 139.999C63.2159 140.034 60.4273 139.137 58.1218 137.443C55.8162 135.75 54.1175 133.35 53.2799 130.603L42.6171 97.044L9.16871 85.78C6.46907 84.8718 4.12613 83.1234 2.47828 80.7874C0.83043 78.4513 -0.0370218 75.6485 0.0012117 72.7839C0.0394452 69.9192 0.981385 67.1409 2.69098 64.8502C4.40058 62.5596 6.78934 60.8751 9.51224 60.0403L42.6964 49.8401L53.8745 16.2341C54.7056 13.4738 56.4248 11.0698 58.7616 9.4003C61.0984 7.73078 63.9204 6.89044 66.7835 7.01146C69.6382 7.01535 72.4148 7.94965 74.6978 9.67453C76.9808 11.3994 78.6474 13.8221 79.4481 16.5799L89.5692 49.9266L122.8 60.6321C125.48 61.5369 127.81 63.2664 129.461 65.5763C131.112 67.8862 132 70.6598 132 73.5052C132 76.3507 131.112 79.1242 129.461 81.4342C127.81 83.7441 125.48 85.4736 122.8 86.3784L89.5097 97.0972L78.8601 130.603C78.0226 133.35 76.3239 135.75 74.0183 137.443C71.7127 139.137 68.9242 140.034 66.07 139.999Z" fill="#7AB1FF" fillOpacity="0.4"/>
                <path d="M136.005 46C134.54 46 133.117 45.5104 131.962 44.6091C130.807 43.7078 129.987 42.4464 129.631 41.0254L127.284 31.6281L117.867 29.098C116.451 28.7178 115.204 27.8753 114.322 26.7045C113.44 25.5337 112.975 24.1018 113.001 22.6364C113.027 21.1711 113.542 19.7563 114.464 18.6172C115.386 17.478 116.662 16.6797 118.09 16.3493L127.291 14.2135L129.631 4.97396C129.987 3.55301 130.807 2.2918 131.962 1.39063C133.117 0.489455 134.54 0 136.005 0C137.47 0 138.893 0.489455 140.048 1.39063C141.203 2.2918 142.024 3.55301 142.38 4.97396L144.707 14.2924L154.026 16.6253C155.447 16.9814 156.708 17.8021 157.609 18.957C158.51 20.1119 159 21.5348 159 22.9997C159 24.4645 158.51 25.8874 157.609 27.0423C156.708 28.1972 155.447 29.0179 154.026 29.374L144.707 31.7069L142.38 41.0254C142.024 42.4464 141.203 43.7078 140.048 44.6091C138.894 45.5104 137.47 46 136.005 46Z" fill="#FFC11E" fillOpacity="0.4"/>
                <path d="M128.503 159C127.189 159.001 125.905 158.602 124.817 157.855C123.729 157.108 122.886 156.047 122.397 154.808L116.85 140.704L102.944 134.757C101.751 134.221 100.741 133.34 100.039 132.224C99.3377 131.107 98.9766 129.805 99.0012 128.481C99.0257 127.157 99.4349 125.87 100.177 124.781C100.92 123.692 101.962 122.85 103.174 122.361L116.896 117.081L122.397 103.117C122.903 101.897 123.752 100.855 124.838 100.123C125.924 99.3907 127.199 99 128.503 99C129.806 99 131.081 99.3907 132.167 100.123C133.253 100.855 134.102 101.897 134.608 103.117L140.135 117.135L153.936 122.748C155.14 123.26 156.168 124.121 156.891 125.225C157.614 126.328 158 127.624 158 128.949C158 130.275 157.614 131.571 156.891 132.674C156.168 133.777 155.14 134.639 153.936 135.15L140.135 140.764L134.608 154.781C134.123 156.025 133.282 157.092 132.194 157.844C131.105 158.596 129.819 158.999 128.503 159Z" fill="#35D073" fillOpacity="0.4"/>
            </svg>

            <h3 className="title add-greeting__title">
                <Text content={title} />
            </h3>

            <p className="add-greeting__text">
                <Text content={"Click on this button to create new advert"} />
            </p>

            <Link href="/add_advert" className="reg-btn reg-btn--warn">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0625 6.5625H8.4375V0.9375C8.4375 0.419736 8.01776 0 7.5 0C6.98224 0 6.5625 0.419736 6.5625 0.9375V6.5625H0.9375C0.419736 6.5625 0 6.98224 0 7.5C0 8.01776 0.419736 8.4375 0.9375 8.4375H6.5625V14.0625C6.5625 14.5803 6.98224 15 7.5 15C8.01776 15 8.4375 14.5803 8.4375 14.0625V8.4375H14.0625C14.5803 8.4375 15 8.01776 15 7.5C15 6.98224 14.5803 6.5625 14.0625 6.5625Z" fill="white"/>
                </svg>

                <Text content="Add advert" />
            </Link>
        </div>
    );
}

export default AddAdvertWarn;