import { act, renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "hooks/useFetch";

describe('Custom hook useFetch', () => {
    test('should fetch data successfully', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue([{
                name: 'Test Data',
                img: 'test-img',
                level: 'Champion'
            }])
        });

        const { result } = renderHook(() => useFetch());

        expect(result.current.data).toBeNull();
        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBeNull();

        act(() => {
            result.current.fetchData('https://digimon-api.vercel.app/api/digimon/name/Agumon');
        });

        await waitFor(() => expect(result.current.loading).toBe(true));
        await waitFor(() => expect(result.current.data).toEqual({
            name: 'Test Data',
            img: 'test-img',
            level: 'Champion'
        }));
        await waitFor(() => expect(result.current.loading).toBe(false));
        await waitFor(() => expect(result.current.error).toBeNull());
    });

    test('should return error when a Digimon is not found', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            json: jest.fn().mockResolvedValue({
                msg: 'Error message'
            })
        });

        const { result } = renderHook(() => useFetch());

        act(() => {
            result.current.fetchData('https://digimon-api.vercel.app/api/digimon/name/testmon');
        });

        await waitFor(() => expect(result.current.loading).toBe(true));
        await waitFor(() => expect(result.current.data).toBeNull());
        await waitFor(() => expect(result.current.loading).toBe(false));
        await waitFor(() => expect(result.current.error).toEqual({
            ErrorMsg: 'Error message'
        }));
    });

    test('should return error when fetch data throw error', async () => {
        global.fetch = jest.fn().mockRejectedValue({
            msg: 'Error message'
        });

        const { result } = renderHook(() => useFetch());

        act(() => {
            result.current.fetchData('https://digimon-api.vercel.app/api/digimon/name/Agumon');
        });

        await waitFor(() => expect(result.current.loading).toBe(true));
        await waitFor(() => expect(result.current.data).toBeNull());
        await waitFor(() => expect(result.current.loading).toBe(false));
        await waitFor(() => expect(result.current.error).toEqual(
            {
                ErrorMsg: 'Error message'
            }
        ));
    });
});

