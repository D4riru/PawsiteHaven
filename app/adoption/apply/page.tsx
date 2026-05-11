'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header, Button, Input, Select } from '@/app/components';
import { AdoptionFormData } from '@/app/types';

export default function AdoptionFormPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<Partial<AdoptionFormData>>({
    idType: 'driver-license',
    gender: 'male',
    petStore: 'arrf-davao',
    age: '18-25',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({ ...prev, idPhoto: e.target.files![0] }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.idNumber?.trim()) newErrors.idNumber = 'ID Number is required';
    if (!formData.firstName?.trim()) newErrors.firstName = 'First Name is required';
    if (!formData.middleName?.trim()) newErrors.middleName = 'Middle Name is required';
    if (!formData.lastName?.trim()) newErrors.lastName = 'Last Name is required';
    if (!formData.dateOfBirth?.trim()) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!formData.petId?.trim()) newErrors.petId = 'Pet ID Number is required';
    if (!formData.petName?.trim()) newErrors.petName = 'Pet Name is required';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      console.log('Adoption form data:', formData);
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          // Reset form
          setFormData({
            idType: 'driver-license',
            gender: 'male',
            petStore: 'arrf-davao',
            age: '18-25',
          });
          router.push('/');
        }, 5000);
      }, 1500);
    } catch (_) {
      setErrors({ form: 'Failed to submit application. Please try again.' });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header showNav={true} showLogin={true} loginHref="/auth/login" />

      <main className="flex-grow py-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 w-full max-w-2xl mx-auto">
            {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl font-extrabold text-orange-500 mb-2">Pet Adoption Application</h1>
            <p className="text-gray-500 text-sm">
              Please ensure all details are filled out and authentic, thanks hooman!
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Details - ID Section */}
            <section className="bg-orange-50 p-6 md:p-8 rounded-2xl border border-orange-100">
              <h2 className="text-sm font-bold text-gray-800 mb-6">Personal Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Select
                  label="Please Select Valid Id*"
                  options={[
                    { value: 'driver-license', label: "Driver's License" },
                    { value: 'passport', label: 'Passport' },
                    { value: 'national-id', label: 'National ID' },
                  ]}
                  value={formData.idType || ''}
                  onChange={(e) => handleChange('idType', e.target.value)}
                />

                <Input
                  label="ID Number*"
                  placeholder="123456"
                  value={formData.idNumber || ''}
                  onChange={(e) => handleChange('idNumber', e.target.value)}
                  error={errors.idNumber}
                />

                <div className="space-y-1">
                  <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide">
                    ID Photo*
                  </label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 rounded-lg border border-orange-300 bg-white cursor-pointer text-sm"
                  />
                </div>
              </div>
            </section>

            {/* Applicant Information Section */}
            <section className="bg-orange-50 p-6 md:p-8 rounded-2xl border border-orange-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Input
                  label="First Name*"
                  placeholder="Enter first name"
                  value={formData.firstName || ''}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  error={errors.firstName}
                />

                <Input
                  label="Middle Name*"
                  placeholder="Enter middle name"
                  value={formData.middleName || ''}
                  onChange={(e) => handleChange('middleName', e.target.value)}
                  error={errors.middleName}
                />

                <Input
                  label="Last Name*"
                  placeholder="Enter last name"
                  value={formData.lastName || ''}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  error={errors.lastName}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Select
                  label="Gender*"
                  options={[
                    { value: 'male', label: 'Male' },
                    { value: 'female', label: 'Female' },
                    { value: 'other', label: 'Other' },
                  ]}
                  value={formData.gender || ''}
                  onChange={(e) => handleChange('gender', e.target.value)}
                />

                <Input
                  label="Date of Birth*"
                  type="date"
                  value={formData.dateOfBirth || ''}
                  onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                  error={errors.dateOfBirth}
                />

                <Select
                  label="Age*"
                  options={[
                    { value: '18-25', label: '18-25' },
                    { value: '26-40', label: '26-40' },
                    { value: '40+', label: '40+' },
                  ]}
                  value={formData.age || ''}
                  onChange={(e) => handleChange('age', e.target.value)}
                />
              </div>
            </section>

            {/* Companion Selection Section */}
            <section className="bg-orange-50 p-6 md:p-8 rounded-2xl border border-orange-100">
              <h2 className="text-sm font-bold text-gray-800 mb-6">Choose Your Companion</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Select
                  label="Pet Store*"
                  options={[
                    { value: 'arrf-davao', label: 'ARRF - Davao' },
                    { value: 'arrf-cebu', label: 'ARRF - Cebu' },
                    { value: 'arrf-manila', label: 'ARRF - Manila' },
                  ]}
                  value={formData.petStore || ''}
                  onChange={(e) => handleChange('petStore', e.target.value)}
                />

                <Input
                  label="Pet ID Number*"
                  placeholder="PXXXXX"
                  value={formData.petId || ''}
                  onChange={(e) => handleChange('petId', e.target.value)}
                  error={errors.petId}
                />

                <Input
                  label="Name Card*"
                  placeholder="Enter name"
                  value={formData.petName || ''}
                  onChange={(e) => handleChange('petName', e.target.value)}
                  error={errors.petName}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Reason For Adoption
                </label>
                <textarea
                  placeholder="Tell us why..."
                  rows={4}
                  value={formData.reasonForAdoption || ''}
                  onChange={(e) => handleChange('reasonForAdoption', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-orange-300 bg-white focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none resize-none"
                />
              </div>
            </section>

            {/* Form Footer & Submit */}
            <footer className="pt-4 space-y-4">
              <Button fullWidth size="lg" loading={loading}>
                {loading ? 'Submitting...' : 'Adopt Now →'}
              </Button>

              <div className="space-y-2">
                <p className="text-gray-400 text-xs italic">*All fields required</p>
                <p className="text-center text-gray-700 text-sm font-medium">
                  *Wait for the <span className="text-orange-500 font-bold">email</span> to be sent for further details.*
                </p>
              </div>
            </footer>
          </form>
          </div>
        </div>
        
        {/* Floating Cat - Bottom Right */}
        <div className="fixed bottom-0 right-0 z-40 pointer-events-none select-none hidden md:block">
          <img 
            src="/kiten.png" 
            alt="Cute kitten" 
            className="w-64 lg:w-96 object-contain drop-shadow-2xl"
          />
        </div>
      </main>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center p-4 md:p-8 overflow-hidden">
          <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex-1 flex justify-center md:justify-end">
              {/* Fallback to dogehtinkyu.png or use a default if it contains the full text */}
              <img 
                src="/dogehtinkyu.png" 
                alt="Thank you dog" 
                className="w-full max-w-lg object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/example1.png';
                }}
              />
            </div>
            <div className="flex-1 text-center md:text-left flex flex-col justify-center">
              <div className="mb-6">
                <span 
                  className="block text-4xl md:text-6xl text-black mb-2 font-medium tracking-wide"
                >
                  Thank You
                </span>
                <h1 
                  className="text-6xl md:text-8xl font-black uppercase" 
                  style={{ color: '#FFA800', textShadow: '4px 4px 0 #000' }}
                >
                  HOOMAN!
                </h1>
              </div>
              <p className="text-sm md:text-base text-gray-800 italic max-w-md mx-auto md:mx-0">
                Check your email for more information about your application. Thank you for choosing <strong>PawSite Haven</strong> 🐾.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
