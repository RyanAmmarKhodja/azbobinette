import React, { useState } from 'react';
import { Menu, X, ChevronDown, Dog, Users, List, PlusCircle, PawPrint } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function CollapsibleSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    setOpenDropdown(null); // Close dropdowns when collapsing
  };

  const toggleDropdown = (name) => {
    if (isCollapsed) return; // Don't open dropdowns when collapsed
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: isCollapsed ? '80px' : '280px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '4px 0 15px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto',
          overflowX: 'hidden',
          zIndex: 1000,
          transition: 'width 0.3s ease',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '30px 20px',
            textAlign: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {!isCollapsed && (
              <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 600, margin: 0 }}>
                <PawPrint size={24} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                Wildlife DB
              </h3>
            )}
            {isCollapsed && (
              <PawPrint size={28} style={{ color: 'white', margin: '0 auto' }} />
            )}
          </div>
          <button
            onClick={toggleSidebar}
            style={{
              position: 'absolute',
              top: '35px',
              right: '-15px',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'white',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {isCollapsed ? <Menu size={16} color="#667eea" /> : <X size={16} color="#667eea" />}
          </button>
        </div>

        {/* Menu */}
        <div style={{ padding: '20px 0' }}>
          {/* Animals Dropdown */}
          <div style={{ margin: '8px 15px' }}>
            <button
              onClick={() => toggleDropdown('animals')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: isCollapsed ? 'center' : 'space-between',
                width: '100%',
                padding: '14px 20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                if (!isCollapsed) e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <Dog size={18} style={{ marginRight: isCollapsed ? 0 : '12px' }} />
                {!isCollapsed && 'Animals'}
              </span>
              {!isCollapsed && (
                <ChevronDown
                  size={16}
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: openDropdown === 'animals' ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              )}
            </button>
            {!isCollapsed && (
              <div
                style={{
                  maxHeight: openDropdown === 'animals' ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease, opacity 0.3s ease',
                  opacity: openDropdown === 'animals' ? 1 : 0,
                  paddingLeft: '15px',
                  marginTop: openDropdown === 'animals' ? '8px' : '0',
                }}
              >
                <NavLink to="/admin/animals" style={{ color: 'inherit', textDecoration: 'none' }}>
                <a
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 20px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    margin: '5px 0',
                    transition: 'all 0.3s ease',
                    fontSize: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.paddingLeft = '25px';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.paddingLeft = '20px';
                  }}
                >
                  <List size={14} style={{ marginRight: '10px' }} />
                  Afficher les animaux
                </a>
                </NavLink>
                <NavLink to="/admin/animals/add" style={{ color: 'inherit', textDecoration: 'none' }}>
                    
                <a
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 20px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    margin: '5px 0',
                    transition: 'all 0.3s ease',
                    fontSize: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.paddingLeft = '25px';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.paddingLeft = '20px';
                  }}
                >
                  <PlusCircle size={14} style={{ marginRight: '10px' }} />
                  Ajouter un animal
                </a>
                </NavLink>
              </div>
            )}
          </div>

          {/* Families Dropdown */}
          <div style={{ margin: '8px 15px' }}>
            <button
              onClick={() => toggleDropdown('families')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: isCollapsed ? 'center' : 'space-between',
                width: '100%',
                padding: '14px 20px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '10px',
                color: 'white',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                if (!isCollapsed) e.currentTarget.style.transform = 'translateX(5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <Users size={18} style={{ marginRight: isCollapsed ? 0 : '12px' }} />
                {!isCollapsed && 'Families'}
              </span>
              {!isCollapsed && (
                <ChevronDown
                  size={16}
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: openDropdown === 'families' ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              )}
            </button>
            {!isCollapsed && (
              <div
                style={{
                  maxHeight: openDropdown === 'families' ? '200px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease, opacity 0.3s ease',
                  opacity: openDropdown === 'families' ? 1 : 0,
                  paddingLeft: '15px',
                  marginTop: openDropdown === 'families' ? '8px' : '0',
                }}
              >
                <NavLink to="/admin/families" style={{ color: 'inherit', textDecoration: 'none' }}>
                <a
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 20px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    margin: '5px 0',
                    transition: 'all 0.3s ease',
                    fontSize: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.paddingLeft = '25px';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.paddingLeft = '20px';
                  }}
                >
                  <List size={14} style={{ marginRight: '10px' }} />
                  Afficher les familles
                </a>
                </NavLink>

                <NavLink to="/admin/families/add" style={{ color: 'inherit', textDecoration: 'none' }}>
                <a
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 20px',
                    color: 'rgba(255, 255, 255, 0.9)',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    margin: '5px 0',
                    transition: 'all 0.3s ease',
                    fontSize: '15px',
                    background: 'rgba(255, 255, 255, 0.05)',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.paddingLeft = '25px';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.paddingLeft = '20px';
                  }}
                >
                  <PlusCircle size={14} style={{ marginRight: '10px' }} />
                  Ajouter une famille
                </a>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content
      <div
        style={{
          marginLeft: isCollapsed ? '80px' : '280px',
          padding: '40px',
          background: '#f8f9fa',
          minHeight: '100vh',
          width: '100%',
          transition: 'margin-left 0.3s ease',
        }}
      >

      </div> */}
    </div>
  );
}