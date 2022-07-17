import { Center } from "@chakra-ui/react";
import React from "react";

interface props {
    children: React.ReactNode;
}

export function FaqBox({ children }: props) {
    return (
        <Center className="py-5">
            <div className="py-5 bg-brand max-w-lg px-5 rounded-md">
                {children}
            </div>
        </Center>
    );
}

export function FaqTitle({ children }: props) {
    return (
        <Center>
            <div className="text-3xl font-bold">
                {children}
            </div>
        </Center>
    );
}

export function FaqDescription({ children }: props) {
    return (
        <Center>
            <div className="max-w-sm pt-1">
                {children}
            </div>
        </Center>
    );
}