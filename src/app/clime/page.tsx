"use client";
import React from "../../../public/Logos/react.svg"

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Image from 'next/image';
import { BsFillSuitDiamondFill } from 'react-icons/bs';

export default function CLIMEPage() {

    return (
        <div className="flex flex-col bg-white text-black w-full min-h-screen mt-[75px] sm:px-96 px-4">
            <h1 className="text-2xl sm:text-5xl font-bold">Communication in Loud Industrial Manufacturing
                Environments</h1>
            <div className="flex flex-row justify-center gap-3 sm:gap-14">
                <div
                    className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center"
                >
                    <div>
                        <div
                            className="hidden sm:flex h-6 w-20 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                        <div
                            className="flex sm:hidden h-4 w-14 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                        <Image
                            src="/CLIME/CLIME_Landing_page.png"
                            height={490}
                            width={255}
                            alt={"Clime landing page"}
                            className="h-fit"
                        />
                    </div>
                </div>
                <div
                    className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center"
                >
                    <div>
                        <div
                            className="hidden sm:flex h-6 w-20 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                        <div
                            className="flex sm:hidden h-4 w-14 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                        <Image
                            src="/CLIME_Chat.png"
                            height={490}
                            width={255}
                            alt={"Chat page"}
                            className="h-fit"
                        />
                    </div>
                </div>
            </div>

            <div className="hidden sm:flex flex-row mt-14 gap-32 w-full">
                <div
                    className="flex flex-row [writing-mode:vertical-lr] text-5xl font-medium self-center">
                    <h2>Overview</h2>
                </div>
                <div className="flex flex-row gap-20">
                    <div className="flex flex-col gap-14">
                        <div>
                            <h3 className="text-2xl font-medium">Problem</h3>
                            <p>Workers in noisy factory environments suffer from poor situational awareness and
                                communication, leading to increased risks and inefficiencies.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium">My Role</h3>
                            <p>Front End Team Lead</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-14">
                        <div>
                            <h2 className="text-2xl font-medium">Solution</h2>
                            <p>An app designed to detect alarms, accurately transmit spoken words, send
                                mass or selective messages, and display messages across different factory sections for
                                improved communication and safety.</p>
                        </div>
                        <div>
                            <div className="flex flex-row text-2xl font-medium self-center">
                                <h2>Sc</h2><BsFillSuitDiamondFill size={18}
                                                                  className="mt-[8px] mr-[1px] text-[#839ebd]"/>
                                <h2>pe</h2>
                            </div>
                            <p>January 2024 - Present</p>
                            <p>Team: 6 members</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden flex flex-col mt-14 gap-5 w-full">
                <div
                    className="flex flex-row text-3xl font-medium self-center">
                    <h2>Overview</h2>
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <h3 className="text-xl font-medium">Problem</h3>
                        <p>Workers in noisy factory environments suffer from poor situational awareness and
                            communication, leading to increased risks and inefficiencies.</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-medium">Solution</h2>
                        <p>An app designed to detect alarms, accurately transmit spoken words, send
                            mass or selective messages, and display messages across different factory sections for
                            improved communication and safety.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium">My Role</h3>
                        <p>Front End Team Lead</p>
                    </div>
                    <div>
                        <div className="flex flex-row text-xl font-medium self-center">
                            <h2>Sc</h2><BsFillSuitDiamondFill size={18}
                                                              className="mt-[8px] mr-[1px] text-[#839ebd]"/>
                            <h2>pe</h2>
                        </div>
                        <p>January 2024 - Present</p>
                        <p>Team: 6 members</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center mt-8 gap-4 sm:gap-10 pt-8">
                <div className="flex flex-col w-full gap-2 max-w-[960px]">
                    <h3 className="text-xl sm:text-2xl font-semibold">Experience as Frontend Team Lead</h3>
                    <p className="sm:indent-8 indent-4">As the frontend team lead, I was responsible for assigning tasks and keeping
                        my team on track. The frontend team consisted of two other members, both of whom were new to
                        React Native. Much of my time during lab was spent helping them fix various bugs, teaching them
                        best practices, and making design decisions. Overall, I enjoyed being the frontend team lead
                        because I remember being in their position, and it was gratifying to be the person who could
                        offer support and guidance.
                    </p>
                    <p className="sm:indent-8 indent-4">Having been very inexperienced at the time, my responsibilities were to
                        create the login and signup pages.
                    </p>
                </div>
                <div>
                    <div className="flex flex-row justify-center gap-3 sm:gap-14">
                        <div
                            className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center"
                        >
                            <div>
                                <div
                                    className="hidden sm:flex h-6 w-20 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                                <div
                                    className="flex sm:hidden h-4 w-14 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                                <Image
                                    src="/CLIME/alarms.png"
                                    height={490}
                                    width={255}
                                    alt={"Alarms page"}
                                    className="h-fit"
                                />
                            </div>
                        </div>
                        <div
                            className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center"
                        >
                            <div>
                                <div
                                    className="hidden sm:flex h-6 w-20 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                                <div
                                    className="flex sm:hidden h-4 w-14 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                                <Image
                                    src="/CLIME/swipe_alarm.png"
                                    height={490}
                                    width={255}
                                    alt={"Alarms page with swipe to delete"}
                                    className="h-fit"
                                />
                            </div>
                        </div>
                    </div>
                    <p className="bg-transparent mt-2 sm:mt-5 ml-1 max-w-[960px] sm:text-md text-sm">Sample alarms page. This page
                        displays a list
                        of alerts for the user, including machine alarms and important announcements. I implemented a
                        swipe-to-delete functionality on this page to enhance ease of use.</p>
                </div>
                <div>
                    <div className="flex flex-row justify-center gap-3 sm:gap-14">
                        <div
                            className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center"
                        >
                            <div>
                                <div
                                    className="hidden sm:flex h-6 w-20 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                                <div
                                    className="flex sm:hidden h-4 w-14 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                                <Image
                                    src="/CLIME/CLIME_Landing_page.png"
                                    height={490}
                                    width={255}
                                    alt={"Clime landing page"}
                                    className="h-fit"
                                />
                            </div>
                        </div>
                        <div
                            className="h-fit w-fit border-[3px] sm:border-[6px] border-black rounded-3xl sm:rounded-[38px] overflow-clip bg-white self-center mt-8 shadow-2xl relative flex justify-center items-center"
                        >
                            <div>
                                <div
                                    className="hidden sm:flex h-6 w-20 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                                <div
                                    className="flex sm:hidden h-4 w-14 bg-black absolute top-[7px] left-1/2 transform -translate-x-1/2 rounded-full"/>
                                <Image
                                    src="/CLIME_Chat.png"
                                    height={490}
                                    width={255}
                                    alt={"Chat page"}
                                    className="h-fit"
                                />
                            </div>
                        </div>
                    </div>
                    <p className="bg-transparent mt-3 sm:mt-5 ml-1 max-w-[960px] sm:text-md text-sm">On the left is the landing page, the page that
                        the user first sees when logging onto the app. They have the ability to either create a group or
                        join an already existing group. </p>
                    <p className="bg-transparent mt-3 ml-1 max-w-[960px] sm:text-md text-sm">On the right is the chat page, the page that
                        the user can use to communicate with their group. The user can tap on the red circular button to
                        start voice recording, record a message, then tap on the red circular button again to stop
                        recording. One neat part about the app is that the voice recording is transmitted to other users
                        in real time, meaning that as they talk the words pop up on the users phones. No need waiting
                        for the whole message to be recorded! </p>
                </div>
                <div className="max-w-[960px]">
                    <h2 className="text-lg sm:text-xl font-medium mb-1">Connecting Other Pages to WebSocket Using Global State</h2>
                    <div className="border-2 border-black rounded-2xl overflow-clip bg-[#fafafa] w-[358px] sm:w-full">
                        <SyntaxHighlighter language="javascript" style={oneLight} className="sm:text-sm text-xs">
                            {"const GlobalStateContext = createContext(undefined);\n" +
                                "let globalStateCreated = false;\n" +
                                "\n" +
                                "export const GlobalStateProvider = ({children}) => {\n" +
                                "    // replace ip with your ip\n" +
                                "    if(globalStateCreated){\n" +
                                "        return\n" +
                                "    }\n" +
                                "    let ws = new WebSocket('ws://' + '{ip}' + '/ws/test/');\n" +
                                "    alert(\"Created websocket\");\n" +
                                "    globalStateCreated = true;\n" +
                                "\n" +
                                "    const [globalState, setGlobalState] = useState({ws: ws, pin: 0, name: \"\"});\n" +
                                "    return (\n" +
                                "        <GlobalStateContext.Provider value={{globalState, setGlobalState}}>\n" +
                                "            {children}\n" +
                                "        </GlobalStateContext.Provider>\n" +
                                "    )\n" +
                                "}\n" +
                                "\n" +
                                "export const useGlobalState = () => useContext(GlobalStateContext);\n" +
                                "\n" +
                                "export default function Layout() {\n" +
                                "    return <GlobalStateProvider>\n" +
                                "            <Stack screenOptions={{\n" +
                                "            headerStyle:{backgroundColor:\"#0a1b2d\"},\n" +
                                "            headerTintColor:\"#fff\",\n" +
                                "            headerTitleStyle: {fontWeight:\"bold\", fontFamily:\"Cabin_400Regular\", fontSize:24},\n" +
                                "        }}>\n" +
                                "            <Stack.Screen\n" +
                                "                name=\"alerts\"\n" +
                                "                options={{\n" +
                                "                    title: \"Alerts\",\n" +
                                "                    presentation: 'modal',\n" +
                                "                }}\n" +
                                "            />\n" +
                                "        </Stack>\n" +
                                "    </GlobalStateProvider>\n" +
                                "}"}
                        </SyntaxHighlighter>
                    </div>
                    <p className="bg-transparent mt-1 ml-1 max-w-[960px] sm:text-md text-sm">Using WebSocket as our primary communication
                        method between the server and the client, we want to ensure there is only one instance running
                        per device. We achieve this using global context. In the code above, we first create a provider
                        that initializes the WebSocket instance. This provider is then wrapped around the entire app,
                        ensuring that every page has access to the same WebSocket instance.</p>
                </div>
                <div className="max-w-[960px]">
                    <h2 className="text-lg sm:text-xl font-medium mb-1">Updating the Chat Messages State</h2>
                    <div className="border-2 border-black rounded-2xl overflow-clip bg-[#fafafa] w-[358px] sm:w-full">
                        <SyntaxHighlighter language="javascript" style={oneLight} className="text-sm">
                            {"const updateMessages = (m, username, final) => {\n" +
                                "    if(!final) {\n" +
                                "        const newArr = [...temp];\n" +
                                "        newArr[newArr.length - 1] = m;\n" +
                                "        newArr.push(\"\")\n" +
                                "        setTemp(newArr);\n" +
                                "    } else {\n" +
                                "        const newArr = [...temp];\n" +
                                "        newArr[newArr.length - 1] = m;\n" +
                                "        setTemp(newArr);\n" +
                                "    }\n" +
                                "    const reversedMessages = [...messages].reverse();\n" +
                                "    let updateApplied = false;\n" +
                                "\n" +
                                "    for (let i = 0; i < reversedMessages.length; i++) {\n" +
                                "        if (reversedMessages[i].user.name === username) {\n" +
                                "            if (!updateApplied) {\n" +
                                "                if (getDateDifferenceInSeconds(reversedMessages[i].createdAt, new Date()) > 10) {\n" +
                                "                    const newMessage = createMessage(m, username == localParams[\"name\"] ? 1 : undefined, username)\n" +
                                "                    reversedMessages.unshift(newMessage);\n" +
                                "                    break;\n" +
                                "                }\n" +
                                "                reversedMessages[i] = {\n" +
                                "                    ...reversedMessages[i],\n" +
                                "                    text: m,\n" +
                                "                    createdAt: new Date(),\n" +
                                "                };\n" +
                                "                updateApplied = true;\n" +
                                "                break\n" +
                                "            }\n" +
                                "        }\n" +
                                "    }\n" +
                                "    if(!updateApplied) {\n" +
                                "        const newMessage = createMessage(m, username == localParams[\"name\"] ? 1 : undefined, username)\n" +
                                "        reversedMessages.unshift(newMessage);\n" +
                                "    }\n" +
                                "    const finalMessages = reversedMessages.reverse();\n" +
                                "    setMessages(finalMessages);\n" +
                                "}"}
                        </SyntaxHighlighter>
                    </div>
                    <p className="bg-transparent mt-1 ml-1 max-w-[960px] indent-8 sm:text-md text-sm">Since chat messages are stored as
                        objects in
                        JavaScript, we need to store them in a state to keep the object continuously updated. The
                        parameters for this function are the message itself (m), the username of the sender (username),
                        and a flag
                        indicating whether the call is the end of the message (final).</p>
                    <p className="bg-transparent mt-2 ml-1 max-w-[960px] indent-8 sm:text-md text-sm">
                        To ensure we start from the most recent messages, we reverse the previous messages list. The
                        logic for updating the state is as follows: if the user is the same as the one who sent the last
                        message and less than 10 seconds have passed since that message started, we simply update their
                        message with the new text. If more than 10 seconds have passed, we create a new message. If the
                        user sending the message is different from the user who sent the previous message, a new message
                        is created. Finally, we reorder the list correctly and update the messages state.</p>
                </div>
            </div>
        </div>
    );
}
