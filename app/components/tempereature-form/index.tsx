'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
    equipmentReference: string;
    user: string;
    date: string;
    time: string;
    maxTemp: string;
    currentTemp: string;
    minTemp: string;
}

export default function TemperatureForm() {

    const [formData, setFormData] = useState<FormData>({
        equipmentReference: 'Container 01',
        user: '',
        date: '',
        time: '',
        maxTemp: '',
        currentTemp: '',
        minTemp: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Dados do Formulário");
        console.table(formData);
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-lg" >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Registrar Temperatura</h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="equipmentReference" className="block text-sm font-medium text-gray-700">Referência do Equipamento</label>
                    <input type="text" id="equipmentReference" name="equipmentReference" placeholder="Ex: Freezer-A01" value={formData.equipmentReference} onChange={handleChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <label htmlFor="user" className="block text-sm font-medium text-gray-700">Usuário</label>
                    <input type="text" id="user" name="user" value={formData.user} onChange={handleChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700">Data</label>
                    <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700">Hora</label>
                    <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <label htmlFor="maxTemp" className="block text-sm font-medium text-gray-700">Temperatura Máxima</label>
                    <input type="number" id="maxTemp" name="maxTemp" step={0.1} value={formData.maxTemp} onChange={handleChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <label htmlFor="currentTemp" className="block text-sm font-medium text-gray-700">Temperatura Atual</label>
                    <input type="number" id="currentTemp" name="currentTemp" step={0.1} value={formData.currentTemp} onChange={handleChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>

                <div>
                    <label htmlFor="minTemp" className="block text-sm font-medium text-gray-700">Temperatura Mínima</label>
                    <input type="number" id="minTemp" name="minTemp" step={0.1} value={formData.minTemp} onChange={handleChange} className="w-full p-2 border-gray-300 border rounded-md focus:ring-blue-500 focus:border-blue-500" />
                </div>


                <button
                    type="submit"
                    className="w-full p-3 mt-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition duration-150"
                >
                    Registrar Temperaturas
                </button>
            </form>
        </div>
    )
}
