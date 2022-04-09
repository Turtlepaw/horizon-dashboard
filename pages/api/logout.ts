import { NextApiRequest, NextApiResponse } from "next";
import { parse, serialize } from "cookie";
import { config } from "../../utils/config";
import { deleteUser } from "../../db/db";

// Get our environment variables
const { cookieName } = config;

export default async (_: NextApiRequest, res: NextApiResponse) => {
	// remove cookie from request header
	res.setHeader("Set-Cookie", [
		serialize(cookieName, "", {
			maxAge: -1,
			path: "/",
		}),
	]);

	const token = parse(_.headers.cookie)[config.cookieName];
	await deleteUser({
		jwt_token: token
	});

	res.writeHead(302, { Location: "/" });
	res.end();
};