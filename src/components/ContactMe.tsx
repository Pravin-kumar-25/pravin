import React, { useState } from 'react';

const ContactMe: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'success' | 'error' | null>(null); // 'success' | 'error' | null
    const [loading, setLoading] = useState(false);

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const response = await fetch('https://formspree.io/f/xkgrddlp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // reset form
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-background text-gray-200 py-20 px-4 md:px-0 border-t border-gray-700 relative">

            {status === 'success' && (
                <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg animate-slideIn">
                    Message sent successfully!
                    <button
                        onClick={() => setStatus(null)}
                        className="ml-4 font-bold focus:outline-none"
                        aria-label="Close notification"
                    >
                        ✕
                    </button>
                </div>
            )}
            {status === 'error' && (
                <div className="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow-lg animate-slideIn">
                    Oops! Something went wrong.
                    <button
                        onClick={() => setStatus(null)}
                        className="ml-4 font-bold focus:outline-none"
                        aria-label="Close notification"
                    >
                        ✕
                    </button>
                </div>
            )}

            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl font-heading font-bold text-accent mb-8">Contact Me</h2>
                <p className="mb-12 text-gray-400">Got a question or want to work together? Shoot me a message!</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-[#1e293b] border border-gray-600 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-[#1e293b] border border-gray-600 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-[#1e293b] border border-gray-600 rounded-md p-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-accent text-background font-semibold py-3 rounded-md shadow-md hover:bg-accent-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {/* Social Links */}
                <div className="mt-12 flex justify-center space-x-8 text-accent text-2xl">
                    {/* Replace emojis with icons or keep as you like */}
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent/80 transition">
                        🐱
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent/80 transition">
                        🔗
                    </a>
                    <a href="mailto:youremail@example.com" aria-label="Email" className="hover:text-accent/80 transition">
                        ✉️
                    </a>
                </div>
            </div>
        </section>
    )
};

export default ContactMe;