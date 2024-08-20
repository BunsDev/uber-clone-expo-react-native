import { create } from 'zustand';
import { DriverStore, LocationStore, MarkerData } from '@/types/type';

export const useLocationStore = create<LocationStore>((set) => ({
    userAddress: null,
    userLatitude: null,
    userLongitude: null,
    destinationAddress: null,
    destinationLatitude: null,
    destinationLongitude: null,
    setUserLocation: (
        {
            address,
            latitude,
            longitude,
        }: {
            address: string;
            latitude: number;
            longitude: number;
        }) => {
        set({
            userAddress: address,
            userLatitude: latitude,
            userLongitude: longitude,
        })
    },
    setDestinationLocation: (
        {
            address,
            latitude,
            longitude,
        }: {
            address: string;
            latitude: number;
            longitude: number;
        }) => {
        set({
            destinationAddress: address,
            destinationLatitude: latitude,
            destinationLongitude: longitude,
        })
    },
}));

export const useDriverStore = create<DriverStore>((set) => ({
    drivers: [] as MarkerData[],
    selectedDriver: null,
    setSelectedDriver: (driveId: number) => set(() => ({ selectedDriver: driveId })),
    setDrivers: (drivers: MarkerData[]) => set(() => ({ drivers })),
    clearSelectedDriver: () => set(() => ({ selectedDriver: null })),
}))