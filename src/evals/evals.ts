//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const get_priceEval: EvalFunction = {
    name: 'get_price Tool Evaluation',
    description: 'Evaluates the get_price tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "What is the latest price for the BTC-USDT instrument on OKX?");
        return JSON.parse(result);
    }
};

const get_candlesticksEval: EvalFunction = {
    name: 'get_candlesticks Tool Evaluation',
    description: 'Evaluates the get_candlesticks tool functionality',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Could you get candlestick data for BTC-USDT using a 5m bar for the last 50 intervals?");
        return JSON.parse(result);
    }
};

const get_priceEval: EvalFunction = {
    name: 'get_price Tool Evaluation',
    description: 'Evaluates the correctness of retrieving the latest price for an OKX instrument',
    run: async () => {
        const result = await grade(openai("gpt-4"), "What is the latest price for BTC-USDT on OKX?");
        return JSON.parse(result);
    }
};

const get_candlesticksEval: EvalFunction = {
  name: 'get_candlesticksEval',
  description: 'Evaluates the get_candlesticks tool functionality',
  run: async () => {
    const result = await grade(openai("gpt-4"), "Please get the candlestick data for BTC-USDT with a 5m bar and a limit of 50.");
    return JSON.parse(result);
  }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [get_priceEval, get_candlesticksEval, get_priceEval, get_candlesticksEval]
};
  
export default config;
  
export const evals = [get_priceEval, get_candlesticksEval, get_priceEval, get_candlesticksEval];