// app/[id]/page.jsx

"use client";
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';

const Details = ({ params }) => {
  const [capsuleData, setCapsuleData] = useState(null);

  useEffect(() => {
    // Ensure params.id is used after it’s accessible
    const fetchData = async () => {
      if (!params?.id) return; // Early return if params.id is missing
      try {
        const response = await fetch(`https://api.spacexdata.com/v3/capsules/${params.id}`);
        const data = await response.json();
        setCapsuleData(data);
      } catch (error) {
        console.error("Error fetching capsule data:", error);
      }
    };

    fetchData();
  }, [params]);

  if (!capsuleData) return <div>Loading...</div>;

  return (
    <div>
      <h2>Capsule Details</h2>
      <p>Capsule Serial: {capsuleData.capsule_serial}</p>
      <p>Capsule ID: {capsuleData.capsule_id}</p>
      <p>Status: {capsuleData.status}</p>

      <h3>Edit Capsule Details</h3>
      <Formik
        initialValues={{
          capsule_serial: capsuleData.capsule_serial || '',
          capsule_id: capsuleData.capsule_id || '',
          status: capsuleData.status || '',
        }}
        onSubmit={(values) => {
          console.log("Updated values:", values);
          // Add functionality for form submission here
        }}
      >
        {() => (
          <Form>
            <label htmlFor="capsule_serial">Capsule Serial:</label>
            <Field name="capsule_serial" />
            <br />

            <label htmlFor="capsule_id">Capsule ID:</label>
            <Field name="capsule_id" />
            <br />

            <label htmlFor="status">Status:</label>
            <Field name="status" />
            <br />

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Details;
